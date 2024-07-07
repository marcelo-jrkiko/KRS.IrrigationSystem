import { BackendClient } from "./BackendClient";

export abstract class BackendRepository {
    protected myBackend: BackendClient;
    protected endpoint: string;

    constructor(backend: BackendClient, endpoint: string) {
        this.myBackend = backend;
        this.endpoint = endpoint;
    }

    public async find(where: any, startAt: number, takeCount: number) {
        const endpoint = this.endpoint + "/find/" + startAt + "/" + takeCount;
        let resp = await this.myBackend.post(endpoint, where);
        return resp.data;
    }

    public async save(data: any) {
        const endpoint = this.endpoint + "/save";
        let resp = await this.myBackend.post(endpoint, data);
        return resp.data;
    }

    public async delete(modelId: number) {
        const endpoint = this.endpoint + "/delete/" + modelId;
        let resp = await this.myBackend.delete(endpoint);
        return resp;
    }
}