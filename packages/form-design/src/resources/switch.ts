import type { Resource } from "../types";

export const switchs: Resource = {
  type: "switch",
  label: "开关",
  icon: "el-icon-switch",
  group: "表单组件",
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
            allowCreate: true,
            dicData: [
              { label: "true", value: true },
              { label: "false", value: false }
            ]
          }
        ]
      },
      value: [
        { label: "否", value: false },
        { label: "是", value: true }
      ]
    },
    {
      label: "开启时背景色",
      prop: "activeColor",
      labelWidth: 100
    },
    {
      label: "关闭时背景色",
      prop: "inactiveColor",
      labelWidth: 100
    }
  ]
};
