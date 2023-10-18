/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string,
 // readonly VITE_API_BASE_URL_2: string
  // more env variables...
}


interface ImportMeta {
  readonly env: ImportMetaEnv
}