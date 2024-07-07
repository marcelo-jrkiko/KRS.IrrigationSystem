import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { BackendClient, BackendPermissionList } from "./Backend/BackendClient";

export interface UserSessionDetails {
    token: string | undefined,
    email: string,
    id: Number,
    client: string | undefined
}

export class UserSessionMan {
    private prefix: string;

    constructor(sessionPrefix: string = "user") {
        this.prefix = sessionPrefix;
    }

    public set(email: string, authToken: string, metadata: any, rules: BackendPermissionList) {
        setCookie(this.prefix + "_rules", JSON.stringify(rules), {
            expires: 1,
            path: "/"
        });

        setCookie(this.prefix + "_session", JSON.stringify({
            ...metadata,
            token: authToken,
            email: email
        }), {
            expires: 1,
            path: "/"
        });
    }

    public has(): boolean {
        return getCookie(this.prefix + '_session') != undefined && getCookie(this.prefix + '_rules') != undefined;
    }

    public getSession(): UserSessionDetails | undefined {
        const session = getCookie(this.prefix + '_session');
        if (session != undefined)
            return JSON.parse(session);
        else
            return undefined;
    }

    public getRuleList(): BackendPermissionList | undefined {
        const session = getCookie(this.prefix + '_rules');
        if (session != undefined)
            return JSON.parse(session);
        else
            return undefined;
    }

    public hasRule(rule: string) {
        const ruleList = this.getRuleList();

        if (ruleList !== undefined) {
            return ruleList.RuleList.includes(rule);
        }

        return false;
    }

    public clear() {
        removeCookie(this.prefix + '_session', {
            path: "/"
        });
        removeCookie(this.prefix + '_rules', {
            path: "/"
        });
    }

    public getBackendClient() {
        const apiClient = new BackendClient();
        const session = this.getSession();
        apiClient.setToken(session!.token!, session!.email);
        return apiClient;
    }
}

export const UserSession = new UserSessionMan();

export function getCurrentUserSession() {
    return UserSession;
}