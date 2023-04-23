import type { ResData } from '@yusui/types'

import { request, useRequest } from '.'

export interface FlowUserTree {
  id?: string
  title?: string
  type?: string
  children?: FlowUserTree[]
}

// 获取用户/部门/岗位列表
export function getUserList(filter?: string) {
  return request.get<ResData<FlowUserTree[]>>('/sapier-flow/flow-user/tree', { params: { filter } })
}
export function useUserList() {
  return useRequest(() => getUserList().then(res => res.data))
}
