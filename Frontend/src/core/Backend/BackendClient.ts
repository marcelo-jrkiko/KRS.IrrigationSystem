import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

export interface BackendAuthResponse {
    isOkay: boolean;
    error: string;
    token: string | undefined;
}

export interface BackendPermissionList {
    RuleList: Array<string>;
}

export async function getDefaultClient(auth: Boolean = true)  : Promise<BackendClient> {
    const backend = new BackendClient();
    return backend;
}

export class BackendClient {
    private apiURL: string;
    private apiClient: AxiosInstance;
    private apiSecret: string;

    constructor() {
        this.apiURL = import.meta.env.VITE_BACKEND_URL;        
        this.apiClient = axios.create({
            baseURL: this.apiURL,
            timeout: 10000,
            headers: {"Content-Type" : "application/json"}
        });
        this.apiSecret = import.meta.env.VITE_SECURE_KEY;
    }


    private setRequestAuth(config: AxiosRequestConfig) {
        if(this.apiSecret.length > 0) {
            config.headers!["X-ApiKey"] = this.apiSecret;
        }
    }

    public async post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
        if(config == undefined)  {
            config = {
                headers: {
                    "Accept" : "application/json"
                },
                validateStatus: () => true,
            };
        } 

       this.setRequestAuth(config);
        
       return this.apiClient.post<T, R, D>(url, data, config);
    }


    public async delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        if(config == undefined)  {
            config = {
                headers: {
                    "Accept" : "application/json"
                },
                validateStatus: () => true,
            };
        } 
        
        this.setRequestAuth(config);

        return this.apiClient.delete<T, R>(url, config);
    }


    public async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        if(config == undefined)  {
            config = {
                headers: {
                    "Accept" : "application/json"
                },
                validateStatus: () => true,
            };
        } 
        
        this.setRequestAuth(config);

        return this.apiClient.get<T, R>(url, config);
    }
}