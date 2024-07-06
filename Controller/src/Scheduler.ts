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

function listAllJobs() {
  const pattern = "src/tasks/**/*.json";
  return glob.sync(pattern).map((p) => path.resolve(p));
}

const jobs: Array<string | (() => void) | JobOptions> = [];

const allRoutes = listAllJobs();
allRoutes.forEach((jobFile) => {
  const fileParts = path.parse(jobFile);
  getLogger().info("[Scheduler] " + fileParts.name);

  const jobModule = JSON.parse(fs.readFileSync(jobFile).toString());

  jobs.push({
    name: fileParts.name,
    interval: jobModule.Schedule,
  });

  getLogger().info("[Scheduler] Loaded " + jobModule.Name  + "= " + jobModule.Schedule);
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

