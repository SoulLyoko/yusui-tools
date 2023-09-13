import type { ResData } from '@yusui/types'
import type { RequestInstance } from '../types'
import type { Options } from 'vue-request'

import { useRequest } from 'vue-request'

/** 用户 */
export interface FlowUserTree {
  id?: string
  title?: string
  type?: string
  parentId?: string
  /** 部门id,只有部门和用户节点有 */
  deptId?: string
  /** 用户id,只有用户节点有 */
  userId?: string
  /** 岗位id,只有岗位节点有 */
  postId?: string
  children?: FlowUserTree[]
}

export function useFlowUserApi(request: RequestInstance) {
  const url = {
    /** 用户、部门、岗位树 */
    tree: '/sapier-flow/flow-user/tree',
  }
  const getUserTree = (filter?: string) => request.get<ResData<FlowUserTree[]>>(url.tree, { params: { filter } })
  const useUserTree = (options?: Options<FlowUserTree[], [string]>) => useRequest((filter?: string) => getUserTree(filter).then(res => res.data), options)
  return {
    url,
    getUserTree,
    useUserTree,
  }
}
