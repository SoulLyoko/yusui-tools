import type { Resource } from "../types";

import MonacoEditor from "../components/monaco-editor/index.vue";

export const date: Resource = {
  type: "date",
  label: "日期",
  icon: "el-icon-calendar",
  group: "日期时间组件",
  format: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD",
  settings: [
    // {
    //   label: "显示类型",
    //   prop: "type",
    //   type: "select",
    //   dicData: [
    //     { label: "年", value: "year" },
    //     { label: "月", value: "month" },
    //     { label: "周", value: "week" },
    //     { label: "日期", value: "date" },
    //     { label: "多个日期", value: "dates" },
    //     { label: "日期范围", value: "daterange" },
    //     { label: "日期时间", value: "datetime" },
    //     { label: "日期时间范围", value: "datetimerange" },
    //     { label: "月范围", value: "monthrange" }
    //   ]
    // },
    {
      label: "开始占位内容",
      prop: "startPlaceholder"
    },
    {
      label: "结束占位内容",
      prop: "startPlaceholder"
    },
    {
      label: "显示格式",
      prop: "format"
    },
    {
      label: "值格式",
      prop: "valueFormat"
    },
    {
      label: "下拉框类名",
      prop: "popperClass"
    },
    {
      label: "范围分割符",
      prop: "rangeSpearator"
    },
    {
      label: "默认显示时间",
      prop: "defaultValue"
    },
    {
      label: "默认选中时刻",
      prop: "defaultTime"
    },
    {
      label: "是否可输入",
      prop: "editable",
      type: "switch",
      value: true
    },
    {
      label: "取消日期联动",
      prop: "unlinkPanels",
      type: "switch",
      value: false
    },
    {
      label: "快捷选项",
      prop: "shortcuts",
      type: "dynamic",
      labelPosition: "top",
      children: {
        column: [
          { label: "名称", prop: "text" },
          { label: "值", prop: "value" }
        ]
      }
    },
    {
      label: "禁用日期方法",
      prop: "disabledDate",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(date) => false`,
      labelWidth: 120,
      labelTip: "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。true表示禁用"
    }
  ]
};

export const year = { ...date, label: "年", type: "year", format: "YYYY", valueFormat: "YYYY" };
export const month = { ...date, label: "月", type: "month", format: "MM", valueFormat: "MM" };
export const week = { ...date, label: "周", type: "week", format: "W", valueFormat: "W" };
export const dates = { ...date, label: "多个日期", type: "dates", format: "YYYY-MM-DD", valueFormat: "YYYY-MM-DD" };
export const monthrange = { ...date, label: "月范围", type: "monthrange", format: "MM", valueFormat: "MM" };
export const daterange = {
  ...date,
  label: "日期范围",
  type: "daterange",
  format: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD"
};
export const datetime = {
  ...date,
  label: "日期时间",
  type: "datetime",
  format: "YYYY-MM-DD HH:mm:ss",
  valueFormat: "YYYY-MM-DD HH:mm:ss"
};
export const datetimerange = {
  ...date,
  label: "日期时间范围",
  type: "datetimerange",
  format: "YYYY-MM-DD HH:mm:ss",
  valueFormat: "YYYY-MM-DD HH:mm:ss"
};
