import type { AvueFormColumn } from '@smallwei/avue'
import type { ButtonItem, FormPropertyItem } from '../types'
import type { Definition } from '@logicflow/core'

import { uniqBy } from 'lodash-unified'

import { defaultFormProperty } from '../constants'

/** 保留修改过的按钮配置并去重 */
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
  return uniqBy(result, 'buttonKey')
}

/** 保留修改过的表单配置并去重 */
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
  return uniqBy(result, 'prop')
}

/** 合并初始化配置，主要是合并plugins */
export function mergeInitOptions(target?: Definition, source?: Definition) {
  return {
    ...target,
    ...source,
    plugins: [...target?.plugins ?? [], ...source?.plugins ?? []],
  } as Definition
}
