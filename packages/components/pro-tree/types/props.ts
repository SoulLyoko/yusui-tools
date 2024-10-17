import type { ISelectProps } from 'element-plus'
import type { TreeComponentProps } from 'element-plus/es/components/tree/src/tree.type'

export interface ProTreeProps extends Partial<TreeComponentProps>, Partial<Omit<ISelectProps, 'modelValue'>> {
  modelValue?: string | number | string[] | number[]
  /** 是否虚拟化 */
  virtualized?: boolean
  /** 虚拟化高度 */
  height?: number
}
