import type { SetupContext } from 'vue'
import type { AvueFormOption } from '@smallwei/avue'
import type { MergeWithCustomizer } from 'lodash'
import type { ElementTreeNode, Resource } from '.'

export interface FormDesignProps {
  /** 绑定的表单配置json */
  modelValue?: AvueFormOption
  /** 分组 */
  groupList?: string[]
  /** 扩展物料库 */
  resources?: Record<string, Resource>
  /** 基础设置 */
  baseOption?: Resource['settings']
  /** 高级设置 */
  advanceOption?: Resource['settings']
  /** 左侧宽度 */
  leftWidth?: string
  /** 右侧宽度 */
  rightWidth?: string
  adapterIn?: (option: AvueFormOption) => ElementTreeNode
  adapterOut?: (tree: ElementTreeNode) => AvueFormOption
  /** 自定义物料库合并函数，用作lodash.mergeWith */
  resourcesMerger?: MergeWithCustomizer
}

export interface FormDesignEmits {
  reset: []
}

export type FormDesignEmit = SetupContext<FormDesignEmits>['emit']
