import type { Resource } from "../types";

import { useDicSettings } from "../options/dic";
import MonacoEditor from "../setters/monaco-editor/index.vue";

export const cascader: Resource = {
  name: "cascader",
  title: "级联选择器",
  icon: "el-icon-connection",
  group: "表单组件",
  settingsValue: { type: "cascader", label: "级联选择器" },
  settings: [
    ...useDicSettings(true),
    {
      label: "分隔字符",
      prop: "separator"
    },
    {
      label: "弹出层类名",
      prop: "popperClass"
    },
    {
      label: "显示完整路径",
      prop: "showAllLevels",
      type: "switch",
      value: true,
      labelWidth: 120
    },
    {
      label: "下拉框插入body",
      prop: "teleported",
      type: "switch",
      value: true,
      labelWidth: 120
    },
    /** 多选 */
    {
      label: "是否多选",
      prop: "multiple",
      type: "switch",
      value: false,
      labelWidth: 120,
      control(multiple) {
        return {
          tagType: { display: multiple },
          tags: { display: multiple },
          collapseTagsTooltip: { display: multiple }
        };
      }
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
      label: "是否折叠标签",
      prop: "tags",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "多选模式下是否折叠Tag"
    },
    {
      label: "悬停显示标签",
      prop: "collapseTagsTooltip",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签"
    },
    /** 搜索 */
    {
      label: "是否可搜索",
      prop: "filterable",
      type: "switch",
      value: false,
      labelWidth: 120,
      control(filterable) {
        return {
          debounce: { display: filterable },
          filterMethod: { display: filterable },
          beforeFilter: { display: filterable }
        };
      }
    },
    {
      label: "搜索去抖延迟",
      prop: "debounce",
      type: "number",
      labelWidth: 120,
      labelTip: "搜索关键词正在输入时的去抖延迟，单位为毫秒"
    },
    {
      label: "搜索函数",
      prop: "filterMethod",
      type: "switch",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(node, keyword) => true`,
      labelTip: "自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项"
    },
    {
      label: "搜索前钩子函数",
      prop: "beforeFilter",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(value) => true`,
      labelTip:
        "过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。"
    },
    /** props */
    {
      label: "子项展开方式",
      prop: "expandTrigger",
      type: "radio",
      button: true,
      dicData: [
        { label: "点击", value: "click" },
        { label: "悬停", value: "hover" }
      ]
    },
    {
      label: "父子不关联",
      prop: "checkStrictly",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "是否严格的遵守父子节点不互相关联"
    },
    {
      label: "返回完整路径",
      prop: "emitPath",
      type: "switch",
      value: true,
      labelWidth: 120,
      labelTip: "在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值"
    },
    {
      label: "动态加载节点",
      prop: "lazy",
      type: "switch",
      value: false,
      labelWidth: 120,
      labelTip: "是否动态加载子节点，需与 lazyLoad 方法结合使用",
      control(lazy) {
        return {
          lazyLoad: { display: lazy }
        };
      }
    },
    {
      label: "动态加载方法",
      prop: "lazyLoad",
      labelWidth: 120,
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(node, resolve) => resolve([])`,
      labelTip: "加载动态数据的方法，仅在 lazy 为 true 时有效"
    }
  ]
};
