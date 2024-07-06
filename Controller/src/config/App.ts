import { getGlobalConfiguration } from "../GlobalContext";

export function doConfig() {
    getGlobalConfiguration().AppPort = parseInt(process.env.APP_PORT!);
    getGlobalConfiguration().SecureKey = process.env.SECURE_KEY!;
}