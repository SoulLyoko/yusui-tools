import type { ElTree, InputProps, TagProps } from 'element-plus'
import type { TreeComponentProps } from 'element-plus/es/components/tree/src/tree.type'

export type TreeInstance = InstanceType<typeof ElTree>

export type EpTreeProps = Partial<TreeComponentProps & Omit<InputProps, 'modelValue'> & {
  modelValue: string | number | string[] | number[]
  multiple: boolean
  tagType: TagProps['type']
}>
