import { createRequest } from '@yusui/request'

export * from './openapi'

export const request = createRequest({
  baseURL: '/api',
})
export const avueRequest = createRequest({
  baseURL: '/api',
  withResponseData: false,
})
