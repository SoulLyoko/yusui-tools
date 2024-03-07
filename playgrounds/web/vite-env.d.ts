interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
  /** BASE_URL=/ */
  BASE_URL: string
  /** MODE=development */
  MODE: string
  /** DEV=true */
  DEV: boolean
  /** PROD=false */
  PROD: boolean
}
