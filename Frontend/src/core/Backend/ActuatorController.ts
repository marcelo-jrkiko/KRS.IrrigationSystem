
import { BackendClient } from "./BackendClient";

export  class ActuatorController {
    protected myBackend: BackendClient;
    protected endpoint: string;

    constructor(backend: BackendClient) {
        this.myBackend = backend;
        this.endpoint = "/actuators";
    }

    public async getAll() {
        const endpoint = this.endpoint + "/all";
        let resp = await this.myBackend.get(endpoint);
        return resp.data;
    }

    public async getState(name: string) {
        const endpoint = this.endpoint + "/state/" + name;
        let resp = await this.myBackend.get(endpoint);
        return resp.data;
    }


    public async start(name: string, duration: number) {
        const endpoint = this.endpoint + "/start/" + name + "/" + duration;
        let resp = await this.myBackend.post(endpoint, {});
        return resp.data;
    }

    
    public async stop(name: string) {
        const endpoint = this.endpoint + "/stop/" + name ;
        let resp = await this.myBackend.post(endpoint, {});
        return resp.data;
    }

    public async delete(modelId: number) {
        const endpoint = this.endpoint + "/delete/" + modelId;
        let resp = await this.myBackend.delete(endpoint);
        return resp;
    }
}