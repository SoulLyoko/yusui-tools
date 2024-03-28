import type { SetupContext } from 'vue'
import type { AvueFormOption } from '@smallwei/avue'
import type { ElementTreeNode, Resource } from '.'

export interface FormDesignProps {
  modelValue?: AvueFormOption
  groupList?: string[]
  resources?: Record<string, Resource>
  baseOption?: Resource['settings']
  advanceOption?: Resource['settings']
  leftWidth?: string
  rightWidth?: string
  adapterIn?: (option: AvueFormOption) => ElementTreeNode
  adapterOut?: (tree: ElementTreeNode) => AvueFormOption
}

export type FormDesignEmits = {
  reset: []
} & object

export type FormDesignEmit = SetupContext<FormDesignEmits>['emit']
