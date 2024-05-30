/** 审批人配置类型 */
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

/** 参与人配置类型 */
export enum ParticipateType {
  用户 = 'user',
  部门 = 'dept',
  角色 = 'role',
  岗位 = 'post',
}

/** 任务节点类型 */
export enum ApprovalTaskNodeType {
  人工审批 = 'manualApproval',
  自动通过 = 'autoPass',
  自动拒绝 = 'autoReject',
}

/** 审批退回类型 */
export enum ApprovalReturnMethod {
  上一个节点 = 'prevNode',
  开始节点 = 'startNode',
  自动结束 = 'autoComplete',
  自选节点 = 'selectNode',
}

/** 多人审批类型 */
export enum MultiPersonApprovalType {
  依次审批 = 'sequentialApproval',
  会签 = 'countersign',
  或签 = 'orsign',
}

/** 审批人员为空类型 */
export enum UserTaskEmptyApproveType {
  自动通过 = 'autoPass',
  自动转交给某个人 = 'autoTransfer',
}

/** 审批人配置项 */
export interface AssigneeItem {
  type?: AssigneeType
  value?: string
  idVal?: string
  values?: any[]
}

/** 参与人配置项 */
export interface ParticipateItem {
  type?: ParticipateType
  value?: string
  idVal?: string
  values?: any[]
}

/** 传阅人配置项 */
export interface CirculateItem {
  type?: string
  value?: string
  idVal?: string
  values?: any[]
}

/** 按钮配置项 */
export interface ButtonItem {
  name?: string
  key?: string
  display?: string
  approval?: string
  validate?: boolean
}

/** 监听器配置项 */
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

/** 其它属性配置项 */
export interface PropertyItem {
  name?: string
  value?: string
}

/** 表单属性配置项 */
export interface FormPropertyItem extends Record<string, any> {
  label?: string
  prop?: string
  display?: boolean
  disabled?: boolean
  detail?: boolean
  required?: boolean
  allDisplay?: boolean
  allDisabled?: boolean
  allDetail?: boolean
  children?: FormPropertyItem[]
}

/** 时限配置项 */
export interface TimeLimitItem {
  name?: string
  min?: number
  max?: number
}

/** 流程配置 */
export interface ProcessConfig {
  snTemplate?: string
  titleTemplate?: string
  abstractTemplate?: string
  enableAutoDistinct?: boolean
  enableRevoke?: boolean
  enableCommentRequired?: boolean
  handleInteractiveMode?: string
  isTaskStart?: boolean
}

/** 审批人配置 */
export interface ApprovalConfig {
  taskNodeType?: ApprovalTaskNodeType
  approvalReturnMethod?: ApprovalReturnMethod
  multiPersonApprovalType?: MultiPersonApprovalType
  userTaskEmptyApproveType?: UserTaskEmptyApproveType
  userTaskEmptyApproveUser?: string
  enableReceiptDisplay?: boolean
}

/** 通知配置 */
export interface NoticeConfig {
  enableBackNotice?: boolean
  processBackNoticeChannel?: string
  processBackNoticeTemplate?: string
  enableTodoNotice?: boolean
  processTodoNoticeChannel?: string
  processTodoNoticeTemplate?: string
  enableCopyNotice?: boolean
  processCopyNoticeChannel?: string
  processCopyNoticeTemplate?: string
  enableCompleteNotice?: boolean
  processCompleteNoticeChannel?: string
  processCompleteNoticeTemplate?: string
}

/** 模板配置项 */
export interface TemplateItem {
  /** 选择的模板 */
  value?: string
  /** 字段映射项 */
  children?: {
    label?: string
    value?: string
    defautValue?: string
  }[]
}

export interface FlowFormData {
  /** 节点id */
  id?: string
  /** 节点名称 */
  name?: string
  /** 节点描述 */
  desc?: string
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
  features?: ButtonItem[]
  /** 执行监听 */
  executionListener?: ListenerItem[]
  /** 表单配置，第一层是表单的配置，children才是字段的配置 */
  fields?: FormPropertyItem[]
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
  notice?: NoticeConfig
  /** 打印模板配置 */
  printTemplate?: TemplateItem[]
  /** 套红模板配置 */
  redTemplate?: TemplateItem[]
}
