export enum AssigneeType {
  用户 = 'user',
  部门 = 'dept',
  角色 = 'role',
  岗位 = 'post',
  动态 = 'dynamic',
  指定节点 = 'userTask',
  指定用户 = 'specifyUser',
  自定义 = 'custom',
}
export enum ParticipateType {
  用户 = 'user',
  部门 = 'dept',
  角色 = 'role',
  岗位 = 'post',
}
export enum ApprovalTaskNodeType {
  人工审批 = 'manualApproval',
  自动通过 = 'autoPass',
  自动拒绝 = 'autoReject',
}
export enum ApprovalReturnMethod {
  上一个节点 = 'prevNode',
  开始节点 = 'startNode',
  自动结束 = 'autoComplete',
  自选节点 = 'selectNode',
}
export enum MultiPersonApprovalType {
  依次审批 = 'sequentialApproval',
  会签 = 'countersign',
  或签 = 'orsign',
}
export enum UserTaskEmptyApproveType {
  自动通过 = 'autoPass',
  自动转交给某个人 = 'autoTransfer',
}

export interface AssigneeItem {
  type?: AssigneeType
  value?: string
  idVal?: string
  values?: any[]
}
export interface ParticipateItem {
  type?: ParticipateType
  value?: string
  idVal?: string
  values?: any[]
}
export interface CirculateItem {
  type?: string
  value?: string
  idVal?: string
  values?: any[]
}
export interface ButtonItem {
  name?: string
  buttonKey?: string
  display?: string
  approval?: string
  validate?: number
}
export interface ListenerItem {
  eventName?: string
  eventType?: string
  eventValue?: string
  fields?: {
    fieldName?: string
    fieldType?: string
    fieldValue?: string
  }[]
}
export interface PropertyItem {
  name?: string
  value?: string
}
export interface FormPropertyItem {
  label?: string
  prop?: string
  display?: boolean
  disabled?: boolean
  detail?: boolean
  readonly?: boolean
  required?: boolean
  validate?: boolean
  children?: FormPropertyItem[]
}
export interface TimeLimitItem {
  name?: string
  min?: number
  max?: number
}
export interface ProcessConfig {
  snTemplate: string
  printTemplate: string
  titleTemplate: string
  abstractTemplate: string
  enableAutoDistinct: boolean
  enableRevoke: boolean
  enableCommentRequired: boolean
  handleInteractiveMode: string
  isTaskStart: boolean
}
export interface ApprovalConfig {
  taskNodeType?: string
  approvalReturnMethod?: string
  multiPersonApprovalType?: string
  userTaskEmptyApproveType?: string
  userTaskEmptyApproveUser?: string
  enableReceiptDisplay?: string
}

export interface FlowFormData {
  /** 节点id */
  id?: string
  /** 节点名称 */
  name?: string
  /** 节点描述 */
  desc?: string
  /** 跳过第一节点 */
  skipFirstNode?: boolean
  /** 驳回节点 */
  rollbackNode?: string
  /** 优先级 */
  priority?: number
  /** 表单标题 */
  formTitle?: string
  /** 表单标题分隔符 */
  formTitleSeparator?: string
  /** 回到驳回人 */
  backToRejecter?: boolean
  /** 多实例类型 */
  multiInstanceType?: string
  /** 完成条件 */
  completionCondition?: string
  /** 回收任务 */
  isRecall?: boolean
  /** 类 */
  className?: string
  /** 异步 */
  isAsync?: boolean
  /** 条件表达式 */
  conditionsequenceflow?: string
  /** 是否为默认分支 */
  defaultConditions?: boolean
  /** 网关类型 */
  inout?: string
  /** 人员配置 */
  assignee?: AssigneeItem[]
  /** 传阅配置 */
  circulate?: CirculateItem[]
  /** 按钮配置 */
  button?: ButtonItem[]
  /** 执行监听 */
  executionListener?: ListenerItem[]
  /** 表单配置 */
  formProperty?: FormPropertyItem[]
  /** 扩展属性 */
  property?: PropertyItem[]
  /** 任务监听 */
  taskListener?: ListenerItem[]
  /** 时限控制 */
  timeLimit?: TimeLimitItem[]
  /** 参与人员 */
  participateConfig?: ParticipateItem[]
  /** 流程基础配置 */
  config?: ProcessConfig
  /** 审批配置 */
  approval?: ApprovalConfig
  /** 通知配置 */
  notice?: ApprovalConfig
}
