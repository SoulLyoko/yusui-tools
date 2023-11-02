import type { AvueFormColumn, AvueFormGroup, AvueFormOption } from '@smallwei/avue'
import type { DesignActionKey, HistoryTypeKey } from '../constants'

/** 中间拖拽元素 */
export interface ElementTreeNode {
  name?: string
  id?: string
  isRoot?: boolean
  props?: Record<string, any>
  children?: ElementTreeNode[]
}

export type ComponentProps = AvueFormOption & AvueFormGroup & AvueFormColumn & { name?: string; id?: string }

export type SettingsFunc = (context: { elementTree: ElementTreeNode; activeElement: ElementTreeNode }) => AvueFormColumn[]

export type DesignOptionFunc = (element: ElementTreeNode) => AvueFormOption

/** 左侧物料组件 */
export interface Resource {
  /** 组件名称 */
  name?: string
  /** 组件中文名称 */
  title?: string
  /** 组件图标 */
  icon?: string
  /** 组件描述 */
  description?: string
  /** 文档链接 */
  docUrl?: string
  /** 组件关键词，用于搜索联想 */
  keywords?: string
  /** 用于描述组件位于组件面板哪个分组 */
  group?: string
  // /** 用于描述当前组件位于组件面板的哪个 tab */
  // group?: string;
  // /** 用于描述组件位于组件面板同一 tab 的哪个区域 */
  // category?: string;
  /** 用于描述组件在同一分组中的排序 */
  priority?: number
  /** 是否容器组件 */
  isContainer?: boolean
  /** 设计面板渲染配置 */
  designOption?: AvueFormOption | DesignOptionFunc
  /** 禁用组件，将不会出现在组件面板中 */
  disabled?: boolean
  /** 设计面板中禁用复制、删除等动作 */
  disabledActions?: DesignActionKey[]
  /** 属性面板中禁用的设置 */
  disabledSettings?: string[]
  /** 配置面板的默认值 */
  props?: ComponentProps
  /** 配置面板 */
  settings?: AvueFormColumn[] | SettingsFunc
  /** 拖放规则 */
  rules?: {
    /** 父级白名单 */
    parentWhiteList?: string[]
    /** 父级黑名单 */
    parentBlackList?: string[]
    /** 子级白名单 */
    childWhiteList?: string[]
    /** 子级黑名单 */
    childBlackList?: string[]
  }
}

/** 历史记录 */
export interface History {
  /** 操作类型 */
  type: HistoryTypeKey
  /** 操作时间戳 */
  timestamp: number
  /** 操作的元素 */
  active: ElementTreeNode
  /** 保存的组件树 */
  tree: ElementTreeNode
  /** 保存的配置 */
  option: AvueFormOption
}
