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
export interface Serial {
  name?: string
  prefix?: string
  dateFormat?: string
  suffixLength?: string
  startSequence?: string
  connector?: string
  cycle?: string
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
  /** 流水号 */
  serial?: Serial
  /** 任务监听 */
  taskListener?: ListenerItem[]
  /** 时限控制 */
  timeLimit?: TimeLimitItem[]
  /** 参与人员 */
  participate?: ParticipateItem[]
  /** 开启自动去重 */
  enableAutoDistinct?: boolean
  /** 开启审批撤销 */
  enableRevoke?: boolean
  /** 开启意见必填 */
  enableCommentRequired?: boolean
}
