import type { Page, ResRecords } from '@yusui/types'

import { request, useRequest } from '.'

export interface FormTemplate {
  /** 表单KEY */
  formKey?: string
  /** 表单名称 */
  formName?: string
  /** 表单配置 */
  formOption?: string
  /** 分类ID */
  categoryId?: string
  /** 主键id */
  id?: string
  /** 表单备注 */
  remarks?: string
  /** 排序 */
  sort?: number
  /** 业务状态 */
  status?: number
  /** 版本号 */
  version?: number
}

export function getList(params: Page & FormTemplate) {
  return request.get<ResRecords<FormTemplate[]>>('/sapier-flow/dev-form/list', { params })
}
export function useFormTemplateList() {
  return useRequest(() => getList({ size: -1 }).then(res => res.data.records))
}

export function create(data: FormTemplate) {
  return request.post('/sapier-flow/dev-form/submit', data)
}

export function update(data: FormTemplate) {
  return request.post('/sapier-flow/dev-form/submit', data)
}

export function remove(ids: string) {
  return request.post('/sapier-flow/dev-form/remove', {}, { params: { ids } })
}
