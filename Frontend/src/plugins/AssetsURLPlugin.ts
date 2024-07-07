import { Plugin } from "vue";

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
      $getAssetsURL: (name: string) => string
    }
}

function addPrefix(src: string): string {
    const prefix = import.meta.env.VITE_APP_URL;
    return prefix + 'assets/'+ src;
}

export const AssetsURLPlugin: Plugin = {
    install(app) {
        app.config.globalProperties.$getAssetsURL = addPrefix
    }
}