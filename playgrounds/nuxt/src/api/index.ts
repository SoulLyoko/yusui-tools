import { createRequest } from '@yusui/request'

export * from './openapi'

export const request = createRequest({
  baseURL: '/api',
})
