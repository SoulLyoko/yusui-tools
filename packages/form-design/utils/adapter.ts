import type { AvueFormColumn, AvueFormOption } from '@smallwei/avue'
import type { ComponentProps, ElementTreeNode } from '../types'

import { cloneDeep } from 'lodash-unified'

import { getRandomId } from '.'

function formItemToElement(list: AvueFormColumn[]): ElementTreeNode[] {
  return list.map((item) => {
    const temp = cloneDeep(item)
    let children: ElementTreeNode[] = []
    temp.name = temp.name || temp.component || temp.type
    temp.id = temp.id || getRandomId(temp.name)
    if (temp.name === 'form')
      children = formItemToElement([...(temp.column ?? []), ...(temp.group ?? [])])
    else if (temp.name === 'group')
      children = formItemToElement(temp.column ?? [])
    else if (['dynamic', 'table'].includes(temp.name))
      children = formItemToElement(temp.children?.column ?? [])

    return {
      name: temp.name,
      id: temp.id,
      isRoot: temp.isRoot,
      props: temp,
      children,
    }
  })
}

export function adapterIn(option: AvueFormOption): ElementTreeNode {
  return formItemToElement([{ isRoot: true, name: 'form', id: getRandomId('form'), ...option }])[0]
}

function elementToFormItem(list: ElementTreeNode[]): ComponentProps[] {
  return list.map((item) => {
    const temp = cloneDeep(item)
    temp.props && (temp.props.prop = temp.props.prop ?? temp.id)
    if (temp.name === 'form') {
      const column = elementToFormItem(temp.children?.filter(e => e.name !== 'group') ?? [])
      const group = elementToFormItem(temp.children?.filter(e => e.name === 'group') ?? [])
      return {
        ...temp.props,
        column: column.length ? column : undefined,
        group: group.length ? group : undefined,
      }
    }
    if (temp.name === 'group') {
      const column = elementToFormItem(temp.children ?? [])
      return { ...temp.props, column }
    }
    else if (['dynamic', 'table'].includes(temp.name ?? '')) {
      const tableColumn = elementToFormItem(temp.children ?? [])
      const tableChildren = { ...temp.props?.children, column: tableColumn }
      return { ...temp.props, children: tableChildren }
    }
    return { ...temp.props }
  })
}
export function adapterOut(tree: ElementTreeNode): AvueFormOption {
  return elementToFormItem([tree])[0] ?? {}
}
