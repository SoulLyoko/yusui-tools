import type { ComponentProps, ElementTreeNode } from '../types'
import type { AvueFormColumn, AvueFormOption } from '@smallwei/avue'

import { cloneDeep } from 'lodash-es'

import { getRandomId } from '.'

function formItemToElement(list: AvueFormColumn[]): ElementTreeNode[] {
  return list.map((item) => {
    const temp = cloneDeep(item)
    temp.name = temp.name || temp.component || temp.type
    temp.id = temp.id || getRandomId(temp.name)
    const result: ElementTreeNode = {
      name: temp.name,
      id: temp.id,
      isRoot: temp.isRoot,
      props: temp,
    }
    if (temp.name === 'form')
      result.children = formItemToElement([...(temp.column ?? []), ...(temp.group ?? [])])
    else if (temp.name === 'group')
      result.children = formItemToElement(temp.column ?? [])
    else if (['dynamic', 'table'].includes(temp.name))
      result.children = formItemToElement(temp.children?.column ?? [])
    else if (Array.isArray(temp.children))
      result.children = formItemToElement(temp.children)
    return result
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
    else if (Array.isArray(temp.children)) {
      return { ...temp.props, children: elementToFormItem(temp.children) }
    }
    return { ...temp.props }
  })
}
export function adapterOut(tree: ElementTreeNode): AvueFormOption {
  return elementToFormItem([tree])[0] ?? {}
}
