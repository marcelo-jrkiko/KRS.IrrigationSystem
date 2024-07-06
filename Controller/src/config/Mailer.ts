import * as fs from "fs";
import { getGlobalConfiguration } from "../GlobalContext";
import * as path from 'path';

export function doConfig() {
    getGlobalConfiguration().Mailer = {
        Host: process.env.SMTP_HOST!,
        Password: process.env.SMTP_PASSWORD!,
        User: process.env.SMTP_USERNAME!,
        Port: parseInt(process.env.SMTP_PORT!),
        Secure: (process.env.SMTP_SECURE == 'true'),
        FromEmail: process.env.SMTP_FROM_ADDRESS!,
        FromName: process.env.SMTP_FROM_NAME!,
        Service: process.env.SMTP_SERVICE!
    }
}