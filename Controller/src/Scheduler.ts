import express, { NextFunction } from "express";
import { Router, Request, Response } from "express";
import cors from "cors";
import "./Startup";

// Inicializa a Aplicação
import { getLogger } from "./GlobalContext";
import Bree, { JobOptions } from "bree";
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs";
import Graceful from "@ladjs/graceful";

getLogger().info("Loading all jobs..");

function listAllJobs(customPattern : string | undefined) {
  const pattern = customPattern == undefined ? "src/tasks/**/*.json" : customPattern;
  return glob.sync(pattern).map((p) => path.resolve(p));
}

const jobs: Array<string | (() => void) | JobOptions> = [];

const allJobs = listAllJobs(undefined);
allJobs.forEach((jobFile) => {
  parseJobDef(jobFile);
});

const customJobs = listAllJobs("storage/tasks/**/*.json");
customJobs.forEach((jobFile) => {
  parseJobDef(jobFile);
});

getLogger().info("Initializing..");

Bree.extend(require('@breejs/ts-worker'));
const bree = new Bree({
  jobs: jobs,
  silenceRootCheckError: true,
  doRootCheck: false,
  root: path.resolve("src/tasks/"),
  defaultExtension: "ts",
});

const graceful = new Graceful({ brees: [bree] });
graceful.listen();
bree.start();

function parseJobDef(jobFile: string) {
  const fileParts = path.parse(jobFile);
  const jobModule = JSON.parse(fs.readFileSync(jobFile).toString());
  const jobName = (jobModule.Source == undefined ? fileParts.name : jobModule.Source);

  getLogger().info("[Scheduler] " + fileParts.name + " / " + jobName);

  jobs.push({
    name: jobName,
    interval: jobModule.Schedule,
    worker : ( jobModule.Data !== undefined) ? {
      workerData: jobModule.Data
    } : undefined
  });

  getLogger().info("[Scheduler] Loaded " + jobModule.Name + "= " + jobModule.Schedule);
}

