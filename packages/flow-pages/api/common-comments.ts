import type { Ref } from 'vue'
import type { ResRecords } from '@yusui/types'

import { request, useRequest } from '.'

export interface Comment {
  id?: string
  content?: string
  type?: string
  sort?: number
}

// 获取常用意见列表
export function getList(type?: string) {
  return request.get<ResRecords<Comment[]>>('/sapier-flow/flow-user-common/list', { params: { type, ascs: 'sort' } })
}
export function useCommentList(type: Ref<string | undefined>) {
  return useRequest(() => getList(type.value).then(res => res.data.records), { refreshDeps: [type] })
}

// 新增
export function create(data: Comment) {
  return request.post('/sapier-flow/flow-user-common/save', data)
}

// 修改
export function update(data: Comment) {
  return request.post('/sapier-flow/flow-user-common/update', data)
}

// 删除
export function remove(ids: string) {
  return request.post('/sapier-flow/flow-user-common/remove', {}, { params: { ids } })
}

// 修改意见排序
export function batchUpdate(data: Comment[]) {
  return request.post('/sapier-flow/flow-user-common/batchUpdate', data)
}
