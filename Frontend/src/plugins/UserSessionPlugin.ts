import {  getCurrentUserSession, UserSessionMan } from "@/core/UserSession";
import { Plugin } from "vue";

const UserSessionPlugin : Plugin = {
    install(app) {
        app.config.globalProperties.$clientSession = () => {
            return getCurrentUserSession();
        }
    }
}

export default UserSessionPlugin;