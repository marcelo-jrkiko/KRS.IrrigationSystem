import { BaseController } from "../core/domain/BaseController";
import { Router, Request, Response } from 'express';
import { getIPRange } from 'get-ip-range';
import { getGlobalConfiguration, getLogger } from "../GlobalContext";
import * as fs from 'fs';
import * as path from 'path';
import { ActuatorConfig } from "../models/ActuatorConfig";
import axios from 'axios';
import qs from 'qs';
import { ActuatorManager } from "../core/ActuatorManager";

export class ActuatorController extends BaseController {
    /**
         * Start the actuator cycle
         * @param req 
         * @param res 
         */
    async startActuator(req: Request, res: Response) {
        try {
            const manager = new ActuatorManager();
            if (await manager.startActuator(req.params.name, parseInt(req.params.duration))) {
                res.status(200);
            }
            else {
                res.status(410);
                res.json({
                    message: "Actuator communcation failed"
                });
            }
        } catch (error) {
            res.status(410);
            res.json({
                message: "Actuator communcation failed"
            });
        }

        res.end();
    }

    /**
     * Stop the actuator cycle
     * @param req 
     * @param res 
     */
    async stopActuator(req: Request, res: Response) {
        try {
            const manager = new ActuatorManager();
            if (await manager.stopActuator(req.params.name)) {
                res.status(200);
            }
            else {
                res.status(410);
                res.json({
                    message: "Actuator communcation failed"
                });
            }
        } catch (error) {
            res.status(410);
            res.json({
                message: "Actuator communcation failed"
            });
        }

        res.end();
    }

    /**
     * Get actuator state by name
     * @param req 
     * @param res 
     */
    async getActuatorState(req: Request, res: Response) {
        try {
            const actuatorName = req.params.name;
            const actuatorMan = new ActuatorManager();

            const resp = await actuatorMan.getActuatorState(actuatorName);

            if (resp == 404) {
                res.status(404);
                res.json({
                    message: "Actuator not found"
                });
            }
            else if (resp == 410) {
                res.status(410);
                res.json({
                    message: "Actuator communcation failed"
                });
            }
            else {
                res.json(resp);
                res.status(200);
            }
        } catch (error) {
            res.status(410);
            res.json({
                message: "Actuator communcation failed"
            });
        }

        res.end();
    }

    /**
     * Busca todos os actuators configurados no controller
     * @param req 
     * @param res 
     */
    async getAll(req: Request, res: Response) {
        try {
            const manager = new ActuatorManager();
            const base: Array<ActuatorConfig> = manager.getBase();
            res.json(base);
            res.status(200);
        } catch (error) {
            res.status(500);
        }

        res.end();
    }


    /**
     * Descobre todos os Actuators na Rede configurada
     * @param req 
     * @param res 
     */
    async discover(req: Request, res: Response) {
        try {
            const manager = new ActuatorManager();
            res.json(await manager.discovery());
            res.status(200);
        } catch (error) {
            res.status(500);
        }

        res.end();
    }
} 