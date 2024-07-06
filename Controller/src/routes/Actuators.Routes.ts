import { Router, Request, Response } from 'express';
import { SecureKeyMiddleware } from '../core/middlewares/SecureKeyMiddleware';
import { ActuatorController } from '../controllers/ActuatorController';


export function setRoutes(route: Router) {

    route.get("/actuators/discovery", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ActuatorController();
        await controller.discover(req, res);
    });

    route.get("/actuators/state/:name", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ActuatorController();
        await controller.getActuatorState(req, res);
    });

    route.post("/actuators/stop/:name", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ActuatorController();
        await controller.stopActuator(req, res);
    });

    route.post("/actuators/start/:name/:duration", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ActuatorController();
        await controller.startActuator(req, res);
    });

    route.get("/actuators/all", SecureKeyMiddleware(),   async (req: Request, res: Response) => {
        const controller = new ActuatorController();
        await controller.getAll(req, res);
    });
}