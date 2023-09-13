import type { AvueFormColumn } from '@smallwei/avue'
import type { ButtonItem, FormPropertyItem } from '../types'
import type { Definition } from '@logicflow/core'

import { defaultFormProperty } from '../constants'

/** 保留修改过的按钮配置 */
export function mergeButton(button: ButtonItem[], source: ButtonItem[]) {
  const result: ButtonItem[] = []
  button.forEach((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    if (!findSource)
      return
    const conditions = [btn.display === findSource?.display, btn.approval === findSource?.approval]
    const isSame = conditions.every(e => e)
    if (isSame)
      return
    result.push(findSource)
  })
  return result
  // return button.map((btn) => {
  //   const findSource = source.find(e => e.buttonKey === btn.buttonKey)
  //   const { name, buttonKey, display, approval, validate } = btn
  //   const result = { name, buttonKey, display, approval, validate, ...findSource }
  //   return result
  // })
}

/** 保留修改过的表单配置 */
export function mergeFormProperty(column: AvueFormColumn[], source: FormPropertyItem[]): FormPropertyItem[] {
  const result: FormPropertyItem[] = []
  column.forEach((col) => {
    const findSource = source.find(e => e.prop === col.prop)
    if (!findSource)
      return
    if (col.type === 'dynamic' && col.children?.column?.length)
      findSource.children = mergeFormProperty(col.children.column, findSource?.children ?? [])
    let { display, disabled, detail, readonly, rules, required } = { ...defaultFormProperty, ...col }
    required = rules?.some(e => e.required) ?? required
    const conditions = [display === findSource?.display, disabled === findSource?.disabled, detail === findSource?.detail, readonly === findSource?.readonly, required === findSource.required]
    const isSame = conditions.every(e => e)
    if (isSame && !findSource.children?.length)
      return
    result.push(findSource)
  })
  return result
  // return column.map((col) => {
  //   const findSource = source.find(e => e.prop === col.prop)
  //   const { label, prop, display = true, disabled = false, detail = false, readonly = false, rules } = col
  //   const required = rules?.some(e => e.required) ?? false
  //   const result = { label, prop, display, disabled, detail, readonly, required, ...findSource }
  //   if (col.type === 'dynamic' && col.children?.column?.length)
  //     result.children = mergeFormProperty(col.children.column, findSource?.children ?? [])
  //   return result
  // })
}

/** 合并初始化配置，主要是合并plugins */
export function mergeInitOptions(target?: Definition, source?: Definition) {
  return {
    ...target,
    ...source,
    plugins: [...target?.plugins ?? [], ...source?.plugins ?? []],
  } as Definition
}
