import { Plugin } from "vue";
import i18n from "./Locale";
import router from "./Router";
import { RouteLocation } from "vue-router";
import { setCookie } from "typescript-cookie";

export function getIsoLocale() {
    switch (i18n.global.locale) {
        case "en-us":
            return "eng";
        case "pt-br":
            return "por";
        default:
            return "por";
    }
}

export function setLocale(lang: string) {
    if (lang == "pt-br")
        i18n.global.locale = "pt-br";
    else if (lang == "en-us")
        i18n.global.locale = "en-us";

    setCookie("user_lang", lang);
}

function TranslateRouteName(name: string): string {
    const currentLocale = i18n.global.locale;

    if (currentLocale == 'pt-br') {
        return name;
    }
    else {
        return name + "." + currentLocale.toUpperCase();
    }
}

function GetRouteByName(name: string, params?: any): RouteLocation {
    const routeName = TranslateRouteName(name);
    if (params !== undefined) {
        return router.resolve({
            name: routeName,
            params: params
        });
    }
    else {
        return router.resolve({
            name: routeName
        });
    }
}



export const LocaleRoutePlugin: Plugin = {
    install(app) {
        app.config.globalProperties.$tRoute = TranslateRouteName;
        app.config.globalProperties.$tRouteByName = GetRouteByName;
        app.config.globalProperties.$setLocale = setLocale;
    }
}