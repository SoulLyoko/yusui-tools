import type { InputProps, TagProps } from 'element-plus'
import type { TreeComponentProps } from 'element-plus/es/components/tree/src/tree.type'

export type ProTreeProps = Partial<TreeComponentProps & Omit<InputProps, 'modelValue'> & {
  modelValue: string | number | string[] | number[]
  multiple: boolean
  tagType: TagProps['type']
}>
