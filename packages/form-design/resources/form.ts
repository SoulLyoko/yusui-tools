import type { Resource } from "../types";

import { iconList } from "../resources/icon";
import { positionDic } from "../options";

export const form: Resource = {
  name: "form",
  title: "表单",
  isContainer: true,
  disabledActions: ["copy", "delete", "clear"],
  disabledSettings: ["base", "event", "advance"],
  settings: [
    {
      label: "标签位置",
      prop: "labelPosition",
      type: "radio",
      button: true,
      dicData: positionDic
    },
    {
      label: "标签宽度",
      prop: "labelWidth",
      type: "number",
      step: 10
    },
    {
      label: "标签后缀",
      prop: "labelSuffix"
    },
    {
      label: "显示按钮",
      prop: "menuBtn",
      type: "switch",
      value: false,
      control(menuBtn: boolean, form: any) {
        const { submitBtn, emptyBtn } = form;
        return {
          submitBtn: { display: menuBtn },
          submitIcon: { display: menuBtn && submitBtn },
          submitText: { display: menuBtn && submitBtn },
          emptyBtn: { display: menuBtn },
          emptyIcon: { display: menuBtn && emptyBtn },
          emptyText: { display: menuBtn && emptyBtn },
          menuSpan: { display: menuBtn },
          menuPosition: { display: menuBtn }
        };
      }
    },
    {
      label: "显示提交按钮",
      prop: "submitBtn",
      type: "switch",
      modelValue: true,
      control(submitBtn: boolean) {
        return {
          submitIcon: { display: !!submitBtn },
          submitText: { display: !!submitBtn }
        };
      }
    },
    {
      label: "提交按钮图标",
      prop: "submitIcon",
      type: "icon",
      iconList,
      modelValue: "el-icon-check"
    },
    {
      label: "提交按钮文字",
      prop: "submitText",
      modelValue: "提交"
    },
    {
      label: "显示清空按钮",
      prop: "emptyBtn",
      type: "switch",
      modelValue: true,
      control(emptyBtn: boolean) {
        return {
          emptyIcon: { display: !!emptyBtn },
          emptyText: { display: !!emptyBtn }
        };
      }
    },
    {
      label: "清空按钮图标",
      prop: "emptyIcon",
      type: "icon",
      iconList,
      modelValue: "el-icon-delete"
    },
    {
      label: "清空按钮文字",
      prop: "emptyText",
      modelValue: "清空"
    },
    {
      label: "按钮栅格",
      prop: "menuSpan",
      type: "number",
      modelValue: 24
    },
    {
      label: "按钮位置",
      prop: "menuPosition",
      type: "radio",
      button: true,
      dicData: [
        { label: "左", value: "left" },
        { label: "中间", value: "center" },
        { label: "右", value: "right" }
      ]
    },
    {
      label: "分组转标签",
      prop: "tabs",
      type: "switch",
      modelValue: false
    },
    {
      label: "详情模式",
      prop: "detail",
      type: "switch",
      modelValue: false
    },
    {
      label: "表单只读",
      prop: "readonly",
      type: "switch",
      modelValue: false
    },
    {
      label: "表单禁用",
      prop: "disabled",
      type: "switch",
      modelValue: false
    },
    {
      label: "表单项栅格",
      prop: "span",
      type: "number",
      value: 24
    },
    {
      label: "表单项间隔",
      prop: "gutter",
      type: "number"
    },
    {
      label: "组件尺寸",
      prop: "size",
      type: "radio",
      button: true,
      dicData: [
        { label: "大", value: "large" },
        { label: "默认", value: "default" },
        { label: "小", value: "small" }
      ]
    }
  ]
};
