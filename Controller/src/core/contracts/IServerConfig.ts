import { HubspotConfig } from "../../models/Hubspot/HubspotConfig"

export interface IDbConfig {
    Name: string,
    Password: string,
    Host: string,
    User: string,
    Schema: string,
    Debug: boolean
}

export interface ILoggingConfig {
    level: string,
    directory: string[]
}

export interface IMailerConfig {
    Port: number,
    Password: string,
    Host: string,
    User: string,
    Secure: boolean,
    Service: string,
    FromEmail: string,
    FromName: string
}

export interface IDiscoveryConfig {
    Network: string
}

export interface IServerConfig {
    AppPort: number,
    Logging: ILoggingConfig | undefined,
    Mailer: IMailerConfig | undefined,
    Discovery: IDiscoveryConfig | undefined;
    SecureKey: string
}