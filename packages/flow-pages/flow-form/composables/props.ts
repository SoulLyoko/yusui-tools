import type { PropType } from 'vue'
import type { CommitTaskData, FlowButton, FlowDetail } from '../../api'
import type { Permission } from '../types'

export function useProps() {
  return {
    /** 表单绑定,v-model */
    modelValue: { type: Object, default: () => ({}) },
    /** 流程详情,v-model */
    flowDetail: { type: Object as PropType<FlowDetail>, default: () => ({}) },
    /** 表单加载,会出现骨架屏,v-model */
    formLoading: { type: Boolean },
    /** 提交加载,按钮loading,v-model */
    submitLoading: { type: Boolean },
    /** 当前激活的标签,v-model */
    activeTab: { type: String, default: 'form' },
    /** 当前点击的按钮 */
    activeBtn: { type: Object as PropType<FlowButton>, default: () => ({}) },
    /** 审批表单 */
    approvalFormData: {
      type: Object as PropType<Pick<CommitTaskData, 'assignee' | 'outgoing' | 'comment'>>,
      default: () => ({}),
    },
    /** 流程key */
    flowKey: { type: String },
    /** 任务id,与实例id传其一即可 */
    taskId: { type: String },
    /** 实例id,与任务id传其一即可 */
    instanceId: { type: String },
    /** 业务表单id,与业务关联时使用 */
    formId: { type: String },
    /** 控制内部组件的显隐 */
    permission: { type: Object as PropType<Permission> },
    /** 弹出审批窗口前 */
    beforeClick: { type: Function as PropType<(btn: FlowButton) => any> },
    /** 审批提交前 */
    beforeSubmit: { type: Function as PropType<(btn: FlowButton) => any> },
    /** 详情模式,为true则禁用表单并隐藏按钮 */
    detail: { type: Boolean },
    /** 调试模式 */
    debug: { type: Boolean },
  }
}

export function useEmits() {
  return {
    complete: (btn?: FlowButton) => btn,
  }
}
