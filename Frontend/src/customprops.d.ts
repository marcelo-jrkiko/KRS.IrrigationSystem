import { RouteLocation } from "vue-router";
import { UserSessionMan } from "./core/UserSession";
export {}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
      $tRoute: (name: string) => string
      $tRouteByName: (name: string, params?: any) => RouteLocation
      $setLocale: (lang: string) => void
      $clientSession: () => UserSessionMan
    }
}

