import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { Res } from '@yusui/types'

export type RequestConfig<RD extends boolean = true> = AxiosRequestConfig & Partial<UniNamespace.UploadFileOption> & {
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
  withResponseData?: RD
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

type WithData<T, D> = D extends true ? AxiosResponse<T> : T

export interface RequestInstance<RD extends boolean = true> extends AxiosInstance {
  <T = Res, R = WithData<T, RD>>(config: RequestConfig): Promise<R>
  <T = Res, R = WithData<T, RD>>(url: string, config?: RequestConfig): Promise<R>
  getUri: (config?: RequestConfig) => string
  request: <T = Res, R = WithData<T, RD>>(config: RequestConfig) => Promise<R>
  get: <T = Res, R = WithData<T, RD>>(url: string, config?: RequestConfig) => Promise<R>
  delete: <T = Res, R = WithData<T, RD>>(url: string, config?: RequestConfig) => Promise<R>
  head: <T = Res, R = WithData<T, RD>>(url: string, config?: RequestConfig) => Promise<R>
  options: <T = Res, R = WithData<T, RD>>(url: string, config?: RequestConfig) => Promise<R>
  post: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
  put: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
  patch: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
  postForm: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
  putForm: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
  patchForm: <T = Res, R = WithData<T, RD>>(url: string, data?: any, config?: RequestConfig) => Promise<R>
}
