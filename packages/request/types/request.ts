import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export type RequestConfig<U extends string = string> = AxiosRequestConfig & Partial<UniNamespace.UploadFileOption> & {
  url?: U
  /**
   * 是否登录验证未通过时退出登录
   * @default true
   */
  withLogout?: boolean
  /**
   * 是否提示报错信息
   * @default true
   */
  withMessage?: boolean
  /**
   * 是否返回response.data
   * @default true
   */
  withResponseData?: boolean
  /**
   * 是否在headers中加入Authorization
   * @default true
   */
  withToken?: boolean
  /**
   * 是否在headers中加入VERSION
   * @default true
   */
  withVersion?: boolean
  /**
   * 是否在headers中加入Clientid
   */
  withClientID?: boolean
  /**
   * 接口是否加密
   * @default false
   */
  withCrypto?: boolean
  /**
   * 是否为app端
   * @default false
   */
  isApp?: boolean
  /** 客户端id */
  clientId?: string
  /** 接口版本 */
  version?: string
  /** 获取token方法 */
  token?: () => string
  /** 退出登录方法 */
  logout?: () => void
  /** 加密方法 */
  encrypt?: (data: any) => any
  /** 解密方法 */
  decrypt?: (data: any) => any
}

export interface RequestInstance<U extends string = string> extends AxiosInstance {
  <R = any>(config: RequestConfig<U>): Promise<R>
  <R = any>(url: U, config?: RequestConfig<U>): Promise<R>
  getUri: (config?: RequestConfig<U>) => U
  request: <R = any>(config: RequestConfig<U>) => Promise<R>
  get: <R = any>(url: U, config?: RequestConfig<U>) => Promise<R>
  delete: <R = any>(url: U, config?: RequestConfig<U>) => Promise<R>
  head: <R = any>(url: U, config?: RequestConfig<U>) => Promise<R>
  options: <R = any>(url: U, config?: RequestConfig<U>) => Promise<R>
  post: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
  put: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
  patch: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
  postForm: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
  putForm: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
  patchForm: <R = any>(url: U, data?: any, config?: RequestConfig<U>) => Promise<R>
}
