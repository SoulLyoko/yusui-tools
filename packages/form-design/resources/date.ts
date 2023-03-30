import type { Resource } from "../types";

import { EditorSetter } from "../setters";

const dateFormat = "YYYY-MM-DD";
const datetimeFormat = "YYYY-MM-DD HH:mm:ss";

export const date: Resource = {
  name: "date",
  title: "日期",
  icon: "el-icon-calendar",
  group: "日期时间组件",
  props: { type: "date", label: "日期", format: dateFormat, valueFormat: dateFormat },
  settings: [
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
      modelValue: true
    },
    {
      label: "取消日期联动",
      prop: "unlinkPanels",
      type: "switch",
      modelValue: false
    },
    {
      label: "禁用日期方法",
      prop: "disabledDate",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(date) => false`,
      labelWidth: 120,
      labelTip: "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。true表示禁用"
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
    }
  ]
};

export const year: Resource = {
  ...date,
  name: "year",
  title: "年",
  props: { type: "year", label: "年", format: "YYYY", valueFormat: "YYYY" }
};
export const month: Resource = {
  ...date,
  name: "month",
  title: "月",
  props: { type: "month", label: "月", format: "MM", valueFormat: "MM" }
};
export const week: Resource = {
  ...date,
  name: "week",
  title: "周",
  props: { type: "week", label: "周", format: "W", valueFormat: "W" }
};
export const dates: Resource = {
  ...date,
  name: "dates",
  title: "多个日期",
  props: { type: "dates", label: "多个日期", format: dateFormat, valueFormat: dateFormat }
};
export const monthrange: Resource = {
  ...date,
  name: "monthrange",
  title: "月范围",
  props: { type: "monthrange", label: "月范围", format: "MM", valueFormat: "MM" }
};
export const daterange: Resource = {
  ...date,
  name: "daterange",
  title: "日期范围",
  props: { type: "daterange", label: "日期范围", format: dateFormat, valueFormat: dateFormat }
};
export const datetime: Resource = {
  ...date,
  name: "datetime",
  title: "日期时间",
  props: { type: "datetime", label: "日期时间", format: datetimeFormat, valueFormat: datetimeFormat }
};
export const datetimerange: Resource = {
  ...date,
  name: "datetimerange",
  title: "日期时间范围",
  props: { type: "datetimerange", label: "日期时间范围", format: datetimeFormat, valueFormat: datetimeFormat }
};
