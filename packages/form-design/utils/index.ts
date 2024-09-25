import type { ElementTreeNode, Resource } from '../types'

import { cloneDeep } from 'lodash-es'

export * from './adapter'
export * from './parser'
export * from './rules'

// 获取随机数字id
export function getRandomId(prefix?: string) {
  const id = Date.now() + Math.floor(Math.random() * 10000)
  return prefix ? `${prefix}_${id}` : `${id}`
}

// 新建一个组件
export function cloneItem(element: Resource): ElementTreeNode {
  const { name, props } = element
  const id = getRandomId(name)
  return cloneDeep({ name, id, props: { ...props, name, id, prop: id } })
}

// 复制一个组件包括其子组件
export function copyItem(element: ElementTreeNode) {
  const item = cloneItem(element)
  if (element.children)
    item.children = element.children.map(copyItem)

  return item
}
