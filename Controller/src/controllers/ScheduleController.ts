import { BaseController } from "../core/domain/BaseController";
import { Router, Request, Response } from 'express';
import * as glob from "glob";
import * as path from "path";
import * as fs from "fs";
import { IActuatorSchedule } from '../models/ActuatorSchedule';
import {v4 as uuidv4} from 'uuid';

export class ScheduleController extends BaseController {
    private async getAllJobs() {
        const pattern = "storage/tasks/*.json";
        const jobsFiles = glob.sync(pattern).map((p) => path.resolve(p));

        return jobsFiles.map((jobFile) => {
            const jobModule : IActuatorSchedule = JSON.parse(fs.readFileSync(jobFile).toString());
            jobModule.Filename = jobFile;
            return jobModule;
        });
    }

    /**
     * Deletes a Schedule
     * @param req 
     * @param res 
     */
    async deleteSchedule(req: Request, res: Response) {
        let jobs = await this.getAllJobs();
        const job = jobs.find((_x) => _x.Id == req.params.id);
        if(job !== undefined) {
            fs.unlinkSync(job.Filename);
        }

        res.status(200);
        res.end();
    }

    /**
     * Adds a Schedule to the Job List
     * @param req 
     * @param res 
     */
    async addSchedule(req: Request, res: Response) {
        const myId = uuidv4();
        const jobParams : IActuatorSchedule = req.body;
        jobParams.Id = myId;

        const destFile = path.join((globalThis as any).AppRoot, `storage/tasks/${myId}-ActuatorJob.json`);
        fs.writeFileSync(destFile, JSON.stringify(jobParams, null, 2))

        res.json(jobParams);
        res.status(200);
        res.end();
    }

    /**
     * Get all schedules 
     * @param req 
     * @param res 
     */
    async getAll(req: Request, res: Response) {
        let jobs = await this.getAllJobs();

        if(req.params.actuatorName !== undefined) {
            jobs = jobs.filter((_x) => _x.Data.ActuatorName == req.params.actuatorName);
        }

        let fnJobs : Array<any> = this.cleanupJobs(jobs)

        res.json(fnJobs);
        res.status(200);
        res.end();
    }

    private cleanupJobs(jobs: IActuatorSchedule[]): any[] {
        return jobs.map((_x) => {
            const newJobObj: any = { ..._x };
            delete newJobObj.Filename;

            return newJobObj;
        });
    }
}