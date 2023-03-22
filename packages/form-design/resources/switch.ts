import type { Resource } from "../types";

export const switchs: Resource = {
  name: "switch",
  title: "开关",
  icon: "el-icon-switch",
  group: "表单组件",
  props: { type: "switch", label: "开关" },
  settings: [
    {
      label: "开关数据",
      prop: "dicData",
      type: "dynamic",
      labelPosition: "top",
      children: {
        column: [
          { label: "_index", prop: "_index", hide: true },
          { label: "文字", prop: "label" },
          {
            label: "值",
            prop: "value",
            type: "select",
            filterable: true,
            allowCreate: true,
            defaultFirstOption: true,
            dicData: [
              { label: "true", value: true },
              { label: "false", value: false }
            ]
          }
        ]
      },
      value: [
        { label: "", value: false },
        { label: "", value: true }
      ]
    },
    {
      label: "开关宽度",
      prop: "len"
    },
    {
      label: "开启时背景色",
      prop: "activeColor",
      type: "color"
    },
    {
      label: "关闭时背景色",
      prop: "inactiveColor",
      type: "color"
    }
  ]
};
