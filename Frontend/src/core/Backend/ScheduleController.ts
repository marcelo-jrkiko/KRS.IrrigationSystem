
import { IActuatorSchedule } from "../Domain/IActuatorSchedule";
import { BackendClient } from "./BackendClient";

export  class ScheduleController {
    protected myBackend: BackendClient;
    protected endpoint: string;

    constructor(backend: BackendClient) {
        this.myBackend = backend;
        this.endpoint = "/schedules";
    }

    public async getAll() {
        const endpoint = this.endpoint + "/all";
        let resp = await this.myBackend.get(endpoint);
        return resp.data;
    }

    public async new(schedule:  IActuatorSchedule) {
        const endpoint = this.endpoint + "/new";
        let resp = await this.myBackend.post(endpoint, schedule);
        return resp.data;
    }
    

    public async find(name: string) {
        const endpoint = this.endpoint + "/find/" + name;
        let resp = await this.myBackend.get(endpoint);
        return resp.data;
    }

    public async delete(modelId: string) {
        const endpoint = this.endpoint + "/delete/" + modelId;
        let resp = await this.myBackend.delete(endpoint);
        return resp;
    }
}