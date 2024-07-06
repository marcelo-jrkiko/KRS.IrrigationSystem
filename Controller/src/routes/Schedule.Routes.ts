import { Router, Request, Response } from 'express';
import { SecureKeyMiddleware } from '../core/middlewares/SecureKeyMiddleware';
import { ScheduleController } from '../controllers/ScheduleController';


export function setRoutes(route: Router) {
    route.post("/schedules/new", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ScheduleController();
        await controller.addSchedule(req, res);
    });

    route.delete("/schedules/delete/:id", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ScheduleController();
        await controller.deleteSchedule(req, res);
    });

    route.get("/schedules/all", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ScheduleController();
        await controller.getAll(req, res);
    });

    route.get("/schedules/find/:actuatorName", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ScheduleController();
        await controller.getAll(req, res);
    });
}