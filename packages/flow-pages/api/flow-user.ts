import type { ResData } from '@yusui/types'

import { useRequest } from 'vue-request'

import { useConfigProvider } from '../composables'

export interface FlowUserTree {
  id?: string
  title?: string
  type?: string
  children?: FlowUserTree[]
}

export function useFlowUserApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 用户树 */
    tree: '/sapier-flow/flow-user/tree',
  }
  const getUserTree = (filter?: string) => request.get<ResData<FlowUserTree[]>>(url.tree, { params: { filter } })
  const useUserTree = () => useRequest(() => getUserTree().then(res => res.data))
  return {
    url,
    getUserTree,
    useUserTree,
  }
}
