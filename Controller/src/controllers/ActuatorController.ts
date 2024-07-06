import { BaseController } from "../core/domain/BaseController";
import { Router, Request, Response } from 'express';
import { getIPRange } from 'get-ip-range';
import { getGlobalConfiguration, getLogger } from "../GlobalContext";
import * as fs from 'fs';
import * as path from 'path';
import { ActuatorConfig } from "../models/ActuatorConfig";
import axios from 'axios';
import qs from 'qs';

export class ActuatorController extends BaseController {
    private getDataDir() {
        const dir = path.join((globalThis as any).AppRoot, "storage", "data");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }

        return dir;
    }

    private getActuatorsFile() {
        return path.join(this.getDataDir(), "actuators.json");
    }

    /**
         * Start the actuator cycle
         * @param req 
         * @param res 
         */
    async startActuator(req: Request, res: Response) {
        try {
            const actuatorName = req.params.name;
            const actuatorBase = this.getBase();

            const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == actuatorName);
            if (actuatorConfig !== undefined) {
                const duration = req.params.duration;

                const resp = await axios.post(`http://${actuatorConfig?.IPAddress}/start`, qs.stringify({
                    "duration": parseInt(duration)
                }), {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                });

                if (resp.status == 200) {
                    res.status(200);
                }
                else {
                    res.status(410);
                    res.json({
                        message: "Actuator communcation failed"
                    });
                }
            }
            else {
                res.status(404);
                res.json({
                    message: "Actuator not found"
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
            const actuatorName = req.params.name;
            const actuatorBase = this.getBase();

            const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == actuatorName);
            if (actuatorConfig !== undefined) {
                const resp = await axios.post(`http://${actuatorConfig?.IPAddress}/stop`);
                if (resp.status == 200) {
                    res.status(200);
                }
                else {
                    res.status(410);
                    res.json({
                        message: "Actuator communcation failed"
                    });
                }
            }
            else {
                res.status(404);
                res.json({
                    message: "Actuator not found"
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
            const actuatorBase = this.getBase();

            const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == actuatorName);
            if (actuatorConfig !== undefined) {
                const resp = await axios.get(`http://${actuatorConfig?.IPAddress}/state`);
                if (resp.status == 200) {
                    const data: string = resp.data;
                    const result = {
                        State: "IDLE",
                        ElapsedTime: 0
                    };

                    const lines = data.split('\n');

                    for (const _line of lines) {
                        const _lineData = _line.trim().split('=');
                        if (_lineData[0] == "CURRENT_STATE") {
                            result.State = _lineData[1];
                        } else if (_lineData[0] == "ELAPSED_TIME") {
                            result.ElapsedTime = parseInt(_lineData[1]);
                        }
                    }

                    res.json(result);
                    res.status(200);
                }
                else {
                    res.status(410);
                    res.json({
                        message: "Actuator communcation failed"
                    });
                }
            }
            else {
                res.status(404);
                res.json({
                    message: "Actuator not found"
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
     * Busca todos os actuators configurados no controller
     * @param req 
     * @param res 
     */
    async getAll(req: Request, res: Response) {
        try {
            if (fs.existsSync(this.getActuatorsFile())) {
                const base: Array<ActuatorConfig> = this.getBase();
                res.json(base);
                res.status(200);
            }
            else {
                res.status(400);
                res.json({
                    message: "No actuators discovered"
                });
            }
        } catch (error) {
            res.status(500);
        }

        res.end();
    }

    private getBase(): ActuatorConfig[] {
        return JSON.parse(fs.readFileSync(this.getActuatorsFile()).toString());
    }

    /**
     * Descobre todos os Actuators na Rede configurada
     * @param req 
     * @param res 
     */
    async discover(req: Request, res: Response) {
        try {
            const discoveredActuators: Array<ActuatorConfig> = [];

            const ipRange = getIPRange(getGlobalConfiguration().Discovery!.Network);
            getLogger().info(`[Actuator] Starting discovery process.`);

            for (const _ip of ipRange) {
                getLogger().debug(`[Actuator] {Discovery} ${_ip}`);

                // Testa a conexão com a porta padrão da API
                try {
                    const resp = await axios.get(`http://${_ip}/ping`, {
                        timeout: 2000
                    });
                    if (resp.status == 200) {
                        const respBody: string = resp.data;
                        if (respBody.indexOf("KRS_IACTUATOR") >= 0) {
                            getLogger().debug(`[Actuator] {Discovery} Actuator found at ${_ip}`);
                            const actuatorDetails = respBody.replace("KRS_IACTUATOR_", "").trim().split("_");
                            discoveredActuators.push({
                                IPAddress: _ip,
                                Name: actuatorDetails[1],
                                Version: actuatorDetails[0]
                            });
                        }
                    }
                } catch (error) {
                    getLogger().debug(`[Actuator] {Discovery} Not listening ${_ip}`);
                }
            }

            getLogger().info(`[Actuator] Discovered: ${discoveredActuators.length} actuators`);
            fs.writeFileSync(this.getActuatorsFile(), JSON.stringify(discoveredActuators));

            res.json(discoveredActuators);
            res.status(200);
        } catch (error) {
            res.status(500);
        }

        res.end();
    }
} 