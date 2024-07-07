/* eslint spaced-comment: off */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_URL: string
  readonly VITE_GEO_SERVER_URL_WMS: string
  readonly VITE_BACKEND_URL: string
  readonly VITE_ADMIN_KEY: string 
  readonly VITE_ADMIN_USER: string 
  readonly VITE_DEFAULT_MAPLAYER_OPACITY: number
  readonly VITE_DEFAULT_MAPSNIP_OPACITY: number
  readonly VITE_INSTITUCIONAL_URL: string
  readonly VITE_INSTITUCIONAL_USER: string
  readonly VITE_INSTITUCIONAL_PASSWORD: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}

