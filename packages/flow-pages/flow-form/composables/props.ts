import type { PropType } from 'vue'
import type { ApprovalFormData, FlowButton, FlowDetail } from '@yusui/flow-pages'
import type { FlowFormPermission } from '../types'

export const flowFormProps = {
  /** 表单绑定,v-model */
  modelValue: { type: Object, default: () => ({}) },
  /** 标题 */
  title: { type: String },
  /** 流程详情,v-model */
  flowDetail: { type: Object as PropType<FlowDetail>, default: () => ({}) },
  /** 表单加载,会出现骨架屏,v-model */
  formLoading: { type: Boolean },
  /** 提交加载,按钮loading,v-model */
  submitLoading: { type: Boolean },
  /** 当前激活的标签,v-model */
  activeTab: { type: String, default: 'formTab' },
  /** 当前点击的按钮 */
  activeBtn: { type: Object as PropType<FlowButton>, default: () => ({}) },
  /** 审批表单显示 */
  approvalVisible: { type: Boolean },
  /** 审批表单数据 */
  approvalFormData: { type: Object as PropType<ApprovalFormData>, default: () => ({}) },
  /** 流程key */
  flowKey: { type: String },
  /** 任务id,与实例id传其一即可 */
  taskId: { type: String },
  /** 实例id,与任务id传其一即可 */
  instanceId: { type: String },
  /** 业务表单id,与业务关联时使用 */
  formId: { type: String },
  /** 文件id */
  fileIds: { type: String },
  /** TODO:控制内部组件的显隐 */
  permission: { type: Object as PropType<FlowFormPermission> },
  /** 弹出审批窗口前 */
  beforeClick: { type: Function as PropType<(btn: FlowButton) => any> },
  /** 审批提交前 */
  beforeSubmit: { type: Function as PropType<(btn: FlowButton) => any> },
  /** 审批提交后 */
  afterSubmit: { type: Function as PropType<(btn: FlowButton) => any> },
  /** 详情模式,为true则禁用表单并隐藏按钮 */
  detail: { type: [Boolean, String], default: false },
  /** 调试模式 */
  debug: { type: [Boolean, String], default: false },
}

export const flowFormEmits = {
  complete: (btn?: FlowButton) => btn,
}
