import { RouteLocation } from "vue-router";
export {}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
      $tRoute: (name: string) => string
      $tRouteByName: (name: string, params?: any) => RouteLocation
      $setLocale: (lang: string) => void
    }
}

