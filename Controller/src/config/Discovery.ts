import { getGlobalConfiguration } from "../GlobalContext";

export function doConfig() {
    getGlobalConfiguration().Discovery = {
        Network : process.env.DISCOVERY_NET!
    }
}