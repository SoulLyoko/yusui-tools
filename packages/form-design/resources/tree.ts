import type { Resource } from "../types";

import { useDicSettings } from "../options/dic";
import { iconList } from "./icon";
import { EditorSetter } from "../setters";

export const tree: Resource = {
  name: "tree",
  title: "树形选择",
  icon: "el-icon-files",
  group: "表单组件",
  props: { type: "tree", label: "树形选择" },
  settings: [
    ...useDicSettings(true),
    // 选择器属性
    {
      labelWidth: 0,
      type: "title",
      modelValue: "树属性"
    },
    {
      label: "空数据文字",
      prop: "emptyText"
    },
    {
      label: "展开后渲染",
      prop: "renderAfterExpand",
      type: "switch",
      value: true
    },
    {
      label: "是否懒加载",
      prop: "lazy",
      type: "switch",
      value: false
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
      value: false
    },
    {
      label: "默认展开全部",
      prop: "defaultExpandAll",
      type: "switch",
      value: false
    },
    {
      label: "点击节点展开",
      prop: "expandOnClickNode",
      type: "switch",
      value: true
    },
    {
      label: "点击节点选择",
      prop: "checkOnClickNode",
      type: "switch",
      value: false
    },
    {
      label: "自动展开父级",
      prop: "autoExpandParent",
      type: "switch",
      value: true
    },
    {
      label: "默认展开节点",
      prop: "defaultExpandedKeys"
    },
    {
      label: "父子不关联",
      prop: "checkStrictly",
      type: "switch",
      value: false
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
      value: false
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
      value: false
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
    {
      labelWidth: 0,
      type: "title",
      modelValue: "选择器属性"
    },
    {
      label: "弹出层主题",
      prop: "effect",
      type: "radio",
      button: true,
      dicData: [
        { label: "浅色", value: "light" },
        { label: "深色", value: "dark" }
      ]
    },
    {
      label: "是否多选",
      prop: "multiple",
      type: "switch",
      labelWidth: 120,
      value: false,
      control(multiple) {
        return {
          tags: { display: multiple },
          collapseTagsTooltip: { display: multiple },
          tagType: { display: multiple },
          limit: { display: multiple }
        };
      }
    },
    {
      label: "是否折叠标签",
      prop: "tags",
      type: "switch",
      labelWidth: 120,
      value: false,
      labelTip: "多选模式下是否折叠Tag"
    },
    {
      label: "悬停显示标签",
      prop: "collapseTagsTooltip",
      type: "switch",
      labelWidth: 120,
      value: false,
      labelTip: "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签"
    },
    {
      label: "标签类型",
      prop: "tagType",
      type: "select",
      dicData: [
        { label: "默认", value: "info" },
        { label: "主色", value: "primary" },
        { label: "成功色", value: "success" },
        { label: "警告色", value: "warning" },
        { label: "危险色", value: "danger" }
      ]
    },
    {
      label: "最多选择项",
      prop: "limit",
      type: "number"
    },
    {
      label: "是否可搜索",
      prop: "filterable",
      type: "switch",
      labelWidth: 120,
      value: false
    },
    {
      label: "是否允许创建",
      prop: "allowCreate",
      type: "switch",
      labelWidth: 120,
      value: false,
      labelTip: "是否用户允许创建新条目， 只有当 filterable 设置为 true 时才会生效。"
    },
    {
      label: "搜索函数",
      prop: "filterMethod",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `() => {}`
    },
    {
      label: "加载文本",
      prop: "loadingText"
    },
    {
      label: "无匹配文字",
      prop: "noMatchText"
    },
    {
      label: "无选项文字",
      prop: "noDataText"
    },
    {
      label: "下拉框类名",
      prop: "popper-class"
    },
    {
      label: "保留关键词",
      prop: "reserveKeyword",
      type: "switch",
      labelWidth: 120,
      value: true,
      labelTip: "当 multiple 和 filter被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词"
    },
    {
      label: "默认选择首项",
      prop: "defaultFirstOption",
      type: "switch",
      labelWidth: 120,
      value: false,
      labelTip: "是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用"
    },
    {
      label: "下拉框插入body",
      prop: "teleported",
      type: "switch",
      labelWidth: 120,
      value: true
    },
    {
      label: "下拉框持久化",
      prop: "persistent",
      type: "switch",
      labelWidth: 120,
      value: true
    },
    {
      label: "自动弹出",
      prop: "automaticDropdown",
      type: "switch",
      labelWidth: 120,
      value: false,
      labelTip: "对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单"
    },
    {
      label: "清除图标",
      prop: "clearIcon",
      type: "icon",
      iconList
    },
    {
      label: "后缀图标",
      prop: "suffixIcon",
      type: "icon",
      iconList
    },
    {
      label: "宽度适应",
      prop: "fitInputWidth",
      type: "switch",
      value: true,
      labelWidth: 120,
      labelTip: "下拉框的宽度是否与输入框相同"
    }
  ]
};
