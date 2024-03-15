import type { UseDictOptions } from '@yusui/composables'

export type ProDictType = 'cascader' | 'checkbox' | 'radio' | 'select' | 'switch' | 'tree-select' | 'text'

export interface ProDictProps extends UseDictOptions {
  /** 绑定值 */
  modelValue?: any
  // modelValue?: UseDictValue
  /** 组件类型 */
  type?: ProDictType
  /** 是否多选 */
  multiple?: boolean
  /** radio,checkbox是否显示为按钮 */
  button?: boolean
  /** radio,checkbox是否显示边框 */
  border?: boolean
}
