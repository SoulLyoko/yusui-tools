import type { Resource } from "../types";

import { dic } from "../options";
import { EditorSetter, DicTreeSetter } from "../setters";
import { iconList } from "./icon";
import { select } from "./select";

export const tree: Resource = {
  name: "tree",
  title: "树形选择",
  icon: "el-icon-files",
  group: "表单组件",
  props: { type: "tree", label: "树形选择" },
  settings: [
    ...dic!.map(item => {
      if (item.prop === "dicData") {
        return {
          ...item,
          component: DicTreeSetter
        };
      }
      return item;
    }),
    // 树属性
    { labelWidth: 0, type: "title", modelValue: "树属性" },
    {
      label: "空数据文字",
      prop: "emptyText"
    },
    {
      label: "展开后渲染",
      prop: "renderAfterExpand",
      type: "switch",
      modelValue: true
    },
    {
      label: "是否懒加载",
      prop: "lazy",
      type: "switch",
      modelValue: false
    },
    {
      label: "懒加载函数",
      prop: "treeLoad",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(node, resolve) => {}`
    },
    {
      label: "节点渲染函数",
      prop: "renderContent",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(h, { node, data, store }) => {}`
    },
    {
      label: "高亮当前节点",
      prop: "highlightCurrent",
      type: "switch",
      modelValue: false
    },
    {
      label: "默认展开全部",
      prop: "defaultExpandAll",
      type: "switch",
      modelValue: false
    },
    {
      label: "点击节点展开",
      prop: "expandOnClickNode",
      type: "switch",
      modelValue: true
    },
    {
      label: "点击节点选择",
      prop: "checkOnClickNode",
      type: "switch",
      modelValue: false
    },
    {
      label: "自动展开父级",
      prop: "autoExpandParent",
      type: "switch",
      modelValue: true
    },
    {
      label: "默认展开节点",
      prop: "defaultExpandedKeys"
    },
    {
      label: "父子不关联",
      prop: "checkStrictly",
      type: "switch",
      modelValue: false
    },
    {
      label: "初始选中节点",
      prop: "currentNodeKey"
    },
    {
      label: "节点过滤函数",
      prop: "filterNodeMethod",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(value, data, node) => {}`
    },
    {
      label: "手风琴",
      prop: "accordion",
      type: "switch",
      modelValue: false
    },
    {
      label: "节点缩进",
      prop: "indent",
      type: "number"
    },
    {
      label: "节点展开图标",
      prop: "icon",
      type: "icon",
      iconList
    },
    {
      label: "是否可拖拽",
      prop: "draggable",
      type: "switch",
      modelValue: false
    },
    {
      label: "允许拖拽函数",
      prop: "allowDrag",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(node) => {}`
    },
    {
      label: "允许放置函数",
      prop: "allowDrop",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(draggingNode, dropNode, type) => {}`
    },
    // 选择器属性
    { labelWidth: 0, type: "title", modelValue: "选择器属性" },
    ...(select.settings?.filter(
      e =>
        !dic
          ?.map(d => d.prop)
          ?.concat(["all", "virtualize"])
          ?.includes(e.prop)
    ) ?? [])
  ]
};
