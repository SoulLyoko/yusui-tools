import type { AxiosPromise, AxiosResponse } from 'axios'
import type { RequestConfig } from '../types'

function getResponse(
  res: UniNamespace.RequestSuccessCallbackResult | UniNamespace.GeneralCallbackResult | UniNamespace.UploadFileSuccessCallbackResult,
  config: RequestConfig,
) {
  return {
    data: 'data' in res ? res.data : undefined,
    statusText: res.errMsg,
    status: 'statusCode' in res ? res.statusCode : undefined,
    headers: 'header' in res ? res.header : undefined,
    config,
    request: undefined,
  } as AxiosResponse
}

function getConfig(config: RequestConfig, resolve: (r: any) => void, reject: (r: any) => void) {
  const { baseURL, url, headers, data, params } = config
  if (headers && !headers['Content-Type'])
    delete headers['Content-Type']
  return {
    ...config,
    url: `${baseURL ?? ''}${url ?? ''}`,
    header: { ...headers },
    data: data || params,
    success(res) {
      const response = getResponse(res, config)
      resolve(response)
    },
    fail(res) {
      const response = getResponse(res, config)
      reject(response)
    },
  } as UniNamespace.RequestOptions
}

function uniAdapter(config: RequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const uniRequestConfig = getConfig(config, resolve, reject)

    if (config.method === 'upload')
      uni.uploadFile(uniRequestConfig as UniNamespace.UploadFileOption)
    else
      uni.request(uniRequestConfig)
  })
}

export { uniAdapter }
