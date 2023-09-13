import type { AvueFormColumn, AvueFormDefaults, AvueFormGroup, AvueFormOption, DicItem } from '@smallwei/avue'
import type { Definition, EdgeConfig, LogicFlow, NodeConfig } from '@logicflow/core'
import type { ButtonItem, FlowFormData, StyleItem, TooltipItem, TurboData } from '../types'

export interface FlowDesignProps {
  /** LogicFlow实例 */
  lf?: LogicFlow
  /** LogicFlow初始化配置 */
  initOptions?: Definition
  /** 流程图数据 */
  modelValue?: TurboData
  /** 当前选中元素的数据 */
  elementData?: NodeConfig | EdgeConfig
  /** 所有表单配置 */
  formOptions?: Record<string, AvueFormGroup[]>
  /** 当前选中元素的表单数据 */
  formData?: FlowFormData
  /** 当前选中元素的表单配置 */
  formOption?: AvueFormOption
  /** 当前表单控制配置 */
  formDefaults?: AvueFormDefaults
  /** 表单宽度 */
  formWidth?: string
  /** 表单配置数据 */
  dataOptions?: {
    /** 按钮数据 */
    buttonList?: ButtonItem[]
    /** 表单字段数据 */
    formPropertyList?: AvueFormColumn[]
    /** 字段字典 */
    fieldsDic?: DicItem[]
    /** 按钮显示字典 */
    flowButtonDisplayDic?: DicItem[]
    /** 按钮审批字典 */
    flowButtonApprovalDic?: DicItem[]
    /** 按钮校验字典 */
    flowButtonValidateDic?: DicItem[]
    /** 人员配置用户选择 */
    flowAssigneeUserDic?: DicItem[]
    /** 人员配置用户部门 */
    flowAssigneeDeptDic?: DicItem[]
    /** 人员配置岗位选择 */
    flowAssigneePostDic?: DicItem[]
    /** 人员配置动态选择 */
    flowAssigneeDynamicDic?: DicItem[]
  }
  /** 查看器模式 */
  type?: 'viewer'
  /** 设置节点的样式 */
  styles?: StyleItem[]
  /** 节点提示框 */
  tooltips?: TooltipItem[]
}
