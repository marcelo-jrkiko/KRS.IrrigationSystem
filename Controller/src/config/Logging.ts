import winston from "winston";
import { getGlobalConfiguration } from "../GlobalContext";
import * as fs from 'fs';
import * as path from 'path';

const LoggingFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});


export function doConfig() {
    getGlobalConfiguration().Logging = {
        level: process.env.APP_LOG_LEVEL!,
        directory: ["storage", "logs"]
    };

    //
    const logDir = path.join(
        (globalThis as any).AppRoot, ...getGlobalConfiguration().Logging!.directory);
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, {
            recursive: true
        });
    }

    // Global Logger 
    (globalThis as any).GlobalLogger = winston.createLogger({
        level: getGlobalConfiguration().Logging?.level,
        format: winston.format.combine(
            winston.format.timestamp(),
            LoggingFormat
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: path.join(logDir, 'app.log') })
        ]
    });
}