
import { getIPRange } from 'get-ip-range';
import { getGlobalConfiguration, getLogger } from "../GlobalContext";
import * as fs from 'fs';
import * as path from 'path';
import { ActuatorConfig } from "../models/ActuatorConfig";
import axios from 'axios';
import qs from 'qs';

export class ActuatorManager {

    async getActuatorState(name: string) {
        const actuatorBase = this.getBase();

        const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == name);
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

                return result;
            }
            else {
                return 410;
            }
        }
        else {
            return 404;
        }
    }

    async stopActuator(name: string) {
        const actuatorBase = this.getBase();

        const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == name);
        if (actuatorConfig !== undefined) {
            const resp = await axios.post(`http://${actuatorConfig?.IPAddress}/stop`);
            return true;
        }
        else {
            return false;
        }
    }

    async startActuator(name: string, duration: number) {
        const actuatorBase = this.getBase();

        const actuatorConfig = actuatorBase.find((_xa) => _xa.Name == name);
        if (actuatorConfig !== undefined) {

            const resp = await axios.post(`http://${actuatorConfig?.IPAddress}/start`, qs.stringify({
                "duration": duration
            }), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            });

            return true;
        }
        else {
            return false;

        }
    }

    async discovery() {
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

        return discoveredActuators;
    }


    getBase(): ActuatorConfig[] {
        if (fs.existsSync(this.getActuatorsFile())) {
            return JSON.parse(fs.readFileSync(this.getActuatorsFile()).toString());
        }
        return [];
    }


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

}