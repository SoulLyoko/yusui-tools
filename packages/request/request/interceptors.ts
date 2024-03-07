import type { RequestConfig, RequestInstance } from '../types'

import { handleDecryption, handleEncryption, handleError, handleHeaders, handleResponseCode } from './handler'

// 请求拦截器函数
export const requestInterceptors: Parameters<RequestInstance['interceptors']['request']['use']> = [
  (config) => {
    handleHeaders(config)
    handleEncryption(config)
    return config
  },
  handleError,
]

// 响应拦截器函数
export const responseInterceptors: Parameters<RequestInstance['interceptors']['response']['use']> = [
  (response) => {
    handleDecryption(response)
    handleResponseCode(response)
    const { config } = response
    const { withResponseData } = config as RequestConfig
    if (response.status === 200)
      return withResponseData ? response.data : response
    else
      return handleError({ response })
  },
  handleError,
]
