import type { AvueFormOption, AvueFormColumn, AvueFormGroup } from "@smallwei/avue";
import type FormDesign from "../index.vue";

/** 中间拖拽元素 */
// export type ResourceElement = AvueFormColumn & { name?: Resource["name"] };

/** 中间拖拽元素 */
export interface ElementTreeNode {
  name?: string;
  id?: string;
  settingsValue?: AvueFormOption & AvueFormGroup & AvueFormColumn & { name?: string };
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
  /** 组件分组 */
  group?: string;
  /** 用于描述组件在同一分组中的排序 */
  priority?: number;
  /** 是否容器组件 */
  isContainer?: boolean;
  /** 配置面板的默认值 */
  settingsValue?: AvueFormColumn;
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

/** 历史记录 */
export interface History {
  type: string;
  timestamp: number;
  active: ElementTreeNode;
  tree: ElementTreeNode[];
}

export type Props = InstanceType<typeof FormDesign>["$props"];
