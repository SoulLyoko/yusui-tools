import type { Resource } from "../types";

export const dic: Resource = {
  settings: [
    {
      label: "字典数据",
      prop: "dicData",
      type: "dynamic",
      labelPosition: "top",
      children: {
        column: [
          { label: "label", prop: "label" },
          { label: "value", prop: "value" }
        ]
      },
      value: [
        { label: "选项一", value: "0" },
        { label: "选项二", value: "1" },
        { label: "选项三", value: "2" }
      ]
    },
    {
      label: "字典网址",
      prop: "dicUrl"
    },
    {
      label: "请求方法",
      prop: "dicMethod",
      type: "radio",
      button: true,
      dicData: [
        { label: "get", value: "get" },
        { label: "post", value: "post" }
      ]
    },
    // {
    //   label: "字典配置",
    //   prop: "props",
    //   display: false,
    //   value: {
    //     label: "label",
    //     value: "value",
    //     desc: "desc",
    //     res: "data"
    //   }
    // },
    {
      label: "字典label",
      prop: "propsLabel",
      bind: "props.label",
      value: "label"
    },
    {
      label: "字典value",
      prop: "propsValue",
      bind: "props.value",
      value: "value"
    },
    {
      label: "字典desc",
      prop: "propsDesc",
      bind: "props.desc",
      value: "desc"
    },
    {
      label: "字典res",
      prop: "propsRes",
      bind: "props.res",
      value: "data"
    },
    {
      label: "远程搜索",
      prop: "remote",
      type: "switch",
      value: false
    }
  ]
};
