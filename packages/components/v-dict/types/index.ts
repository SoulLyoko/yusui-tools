import type { UseDictOptions } from '@yusui/composables'

export type VDictType = 'cascader' | 'checkbox' | 'radio' | 'select' | 'switch' | 'tree-select' | 'text'

export interface VDictProps extends UseDictOptions {
  /** 绑定值 */
  modelValue?: any
  // modelValue?: UseDictValue
  /** 组件类型 */
  type?: VDictType
  /** 是否多选 */
  multiple?: boolean
  /** radio,checkbox是否显示为按钮 */
  button?: boolean
  /** radio,checkbox是否显示边框 */
  border?: boolean
}
