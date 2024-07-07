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

    if(auth) {
        const authResp = await backend.AuthenticateWithSharedKey(
            import.meta.env.VITE_ADMIN_USER,
            import.meta.env.VITE_ADMIN_KEY
        );

        backend.setToken(authResp.token!, import.meta.env.VITE_ADMIN_USER);
    }

    return backend;
}

export class BackendClient {
    private apiURL: string;
    private apiClient: AxiosInstance;
    private apiToken: string;
    private apiSecret: string;

    constructor() {
        this.apiURL = import.meta.env.VITE_BACKEND_URL;        
        this.apiClient = axios.create({
            baseURL: this.apiURL,
            timeout: 10000,
            headers: {"Content-Type" : "application/json"}
        });
        this.apiSecret = "";
        this.apiToken = "";
    }

    private getAuthenticationResponse(resp: AxiosResponse<any,any>) : BackendAuthResponse {
        const respBody = resp.data;

        if(resp.status == 200) 
        {
            return {
                isOkay: true,
                token: respBody.token,
                error: ""
            };
        } 
        else {
            return {
                isOkay: false,
                error: respBody.error,
                token: undefined
            };
        }
    
    }

    public setToken(token: string, email: string) {
        this.apiToken = token;
        this.apiSecret = email;
    }

    private setRequestAuth(config: AxiosRequestConfig) {
        if(this.apiToken.length > 0) {
            config.headers!.Authorization = "Bearer " + this.apiToken;
            config.headers!["X-Auth-User"] = this.apiSecret;
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

    public async GetAllPermissions() : Promise<BackendPermissionList> {
        const resp = await this.get("/system/security/allpermissions");
        const rules: Array<string> = [];

        resp.data.forEach((eRule: any) => {
            rules.push(eRule.permission.key);
        });

        return {
            RuleList: rules
        };
    }


    public async AuthenticateWithSharedKey(email: string, key: string) : Promise<BackendAuthResponse> {
        const resp = await this.apiClient.post("/system/security/auth", {
            "Email": email,
            "SharedKey": key
        }, {
            validateStatus: () => true
        });

        return this.getAuthenticationResponse(resp);
    }

    public async Authenticate(email: string, password: string) : Promise<BackendAuthResponse> {
        const resp = await this.apiClient.post("/system/security/authByPassword", {
            "Email": email,
            "Password": password
        }, {
            validateStatus: () => true
        });

        return this.getAuthenticationResponse(resp);
    }
}