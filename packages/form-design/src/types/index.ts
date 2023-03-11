import type { AvueFormOption, AvueFormColumn, AvueFormGroup } from "@smallwei/avue";
import type FormDesign from "../index.vue";

export type ComponentProps = AvueFormOption & AvueFormGroup & AvueFormColumn & { name?: string; id?: string };

/** 中间拖拽元素 */
export interface ElementTreeNode {
  name?: string;
  id?: string;
  isRoot?: boolean;
  props?: ComponentProps;
  children?: ElementTreeNode[];
}

/** 左侧物料组件 */
export interface Resource {
  /** 组件名称 */
  name?: string;
  /** 组件中文名称 */
  title?: string;
  /** 组件图标 */
  icon?: string;
  /** 组件描述 */
  description?: string;
  /** 文档链接 */
  docUrl?: string;
  /** 组件关键词，用于搜索联想 */
  keywords?: string;
  /** 用于描述组件位于组件面板哪个分组 */
  group?: string;
  // /** 用于描述当前组件位于组件面板的哪个 tab */
  // group?: string;
  // /** 用于描述组件位于组件面板同一 tab 的哪个区域 */
  // category?: string;
  /** 用于描述组件在同一分组中的排序 */
  priority?: number;
  /** 是否容器组件 */
  isContainer?: boolean;
  /** 设计面板渲染配置 */
  designOption?: AvueFormOption | ((element: ElementTreeNode) => AvueFormOption);
  /** 设计面板中禁用复制、删除等动作 */
  disabledActions?: DesignAction[];
  /** 属性面板中禁用的设置 */
  disabledSettings?: string[];
  /** 配置面板的默认值 */
  props?: ComponentProps;
  /** 配置面板 */
  settings?: AvueFormColumn[];
  /** 拖放规则 */
  rules?: {
    parentWhiteList?: string[];
    parentBlackList?: string[];
    childWhiteList?: string[];
    childBlackList?: string[];
  };
}

export const HistoryType = {
  init: "初始化",
  added: "添加组件",
  moved: "移动组件",
  removed: "删除组件",
  property: "修改属性",
  clear: "清空子组件"
};
export type HistoryType = keyof typeof HistoryType;

/** 历史记录 */
export interface History {
  type: HistoryType;
  timestamp: number;
  active: ElementTreeNode;
  tree: ElementTreeNode;
  option: AvueFormOption;
}

export const DesignAction = {
  copy: "复制",
  delete: "删除",
  clear: "清空"
};
export type DesignAction = keyof typeof DesignAction;

export type Props = InstanceType<typeof FormDesign>["$props"];
export type Emit = InstanceType<typeof FormDesign>["$emit"];
