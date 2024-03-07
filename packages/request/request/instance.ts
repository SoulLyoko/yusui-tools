import type { RequestConfig, RequestInstance } from '../types'

import axios from 'axios'

import { uniAdapter } from './adapter'
import { requestInterceptors, responseInterceptors } from './interceptors'

const defaultConfig: RequestConfig = {
  timeout: 60 * 1000, // ms
  withCredentials: true,
  withLogout: true,
  withMessage: true,
  withResponseData: true,
  withToken: true,
  withVersion: true,
  withClientID: true,
}

export function createRequest<RD extends boolean = true>(config: RequestConfig<RD> = {}) {
  const instance = axios.create({
    adapter: config?.isApp ? uniAdapter : undefined,
    ...defaultConfig,
    ...config,
  }) as RequestInstance<RD>
  instance.interceptors.request.use(...requestInterceptors)
  instance.interceptors.response.use(...responseInterceptors)
  return instance
}
