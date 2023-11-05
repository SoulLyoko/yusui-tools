export interface ContextMenuItem {
  label?: string
  icon?: string
  children?: ContextMenuItem[]
  [x: string]: any
}

export interface ContextMenuProps {
  modelValue?: boolean
  data?: ContextMenuItem[]
  triggerRef?: HTMLElement
  x?: number | string
  y?: number | string
}

export type ContextMenuEmits = {
  select: [item: ContextMenuItem]
} & object
