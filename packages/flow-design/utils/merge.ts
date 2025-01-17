import type { ButtonItem, FormPropertyItem } from '../types'
import type { AvueFormOption } from '@smallwei/avue'

import { uniqBy } from 'lodash-es'

import { defaultFormProperty } from '../constants'
import { getFormColumn } from './transfer'

/** 保留修改过的按钮配置并去重 */
export function mergeButton(button: ButtonItem[], source: ButtonItem[]) {
  const result: ButtonItem[] = []
  button.forEach((btn) => {
    const findSource = source.find(e => e.key === btn.key)
    if (!findSource)
      return
    const conditions = [
      !btn.name || btn.name === findSource.name,
      !btn.display || btn.display === findSource.display,
      !btn.display || btn.approval === findSource.approval,
      btn.validate === findSource.validate,
    ]
    // 所有条件满足视为未修改过
    const isSame = conditions.every(e => e)
    if (isSame)
      return
    result.push(findSource)
  })
  return uniqBy(result, 'key')
}

/** 保留修改过的表单配置并去重 */
export function mergeFormProperty(option: AvueFormOption, source: FormPropertyItem[]): FormPropertyItem[] {
  const result: FormPropertyItem[] = []
  const column = getFormColumn(option)
  column.forEach((col) => {
    const findSource = source.find(e => e.prop === col.prop)
    if (!findSource)
      return
    if (col.type === 'dynamic' && col.children?.column?.length)
      findSource.children = mergeFormProperty(col.children.column, findSource?.children ?? [])
    const { display, disabled, detail, readonly, rules } = { ...defaultFormProperty, ...col }
    // 规则中存在required视为必填
    const required = !!rules?.some(e => e.required)
    // 存在规则视为要校验
    const validate = !!rules?.length
    const conditions = [
      display === findSource.display,
      disabled === findSource.disabled,
      detail === findSource.detail,
      readonly === findSource.readonly,
      required === findSource.required,
      validate === findSource.validate,
    ]
    // 所有条件满足视为未修改过
    const isSame = conditions.every(e => e)
    if (isSame && !findSource.children?.length)
      return
    result.push(findSource)
  })
  return uniqBy(result, 'prop')
}
