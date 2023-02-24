import type { Resource } from "../types";

export const date: Resource = {
  type: "date",
  label: "日期选择",
  icon: "el-icon-calendar",
  group: "表单组件",
  format: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD",
  settings: [
    {
      label: "显示类型",
      prop: "type",
      type: "select",
      dicData: [
        { label: "年", value: "year" },
        { label: "月", value: "month" },
        { label: "周", value: "week" },
        { label: "日期", value: "date" },
        { label: "日期多选", value: "dates" },
        { label: "日期范围", value: "daterange" },
        { label: "日期时间", value: "datetime" },
        { label: "日期时间范围", value: "datetimerange" },
        { label: "月范围", value: "monthrange" }
      ]
    },
    {
      label: "开始占位内容",
      prop: "startPlaceholder",
      labelWidth: 100
    },
    {
      label: "结束占位内容",
      prop: "startPlaceholder",
      labelWidth: 100
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
      prop: "defaultValue",
      labelWidth: 100
    },
    {
      label: "默认选中时刻",
      prop: "defaultTime",
      labelWidth: 100
    },
    {
      label: "是否可输入",
      prop: "editable",
      type: "switch",
      value: true,
      labelWidth: 100
    },
    {
      label: "取消日期联动",
      prop: "unlinkPanels",
      type: "switch",
      value: false,
      labelWidth: 100
    },
    {
      label: "快捷选项",
      prop: "shortcuts",
      type: "dynamic",
      labelPosition: "top",
      children: {
        column: [
          { label: "文字", value: "text" },
          { label: "值", value: "value" }
        ]
      }
    },
    {
      label: "禁用日期方法",
      prop: "disabledDate",
      type: "textarea",
      labelPosition: "top",
      labelTip: "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。"
    }
  ]
};

export const year = { ...date, label: "年选择", type: "year", format: "YYYY", valueFormat: "YYYY" };
export const month = { ...date, label: "月选择", type: "month", format: "MM", valueFormat: "MM" };
export const week = { ...date, label: "周选择", type: "week", format: "W", valueFormat: "W" };
export const dates = { ...date, label: "日期多选", type: "dates", format: "YYYY-MM-DD", valueFormat: "YYYY-MM-DD" };
export const monthrange = { ...date, label: "月范围选择", type: "monthrange", format: "MM", valueFormat: "MM" };
export const daterange = {
  ...date,
  label: "日期范围选择",
  type: "daterange",
  format: "YYYY-MM-DD",
  valueFormat: "YYYY-MM-DD"
};
export const datetime = {
  ...date,
  label: "日期时间选择",
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
