import type { Resource } from "../types";

const defaultValue = {
  dicData: [
    { label: "选项一", value: "0" },
    { label: "选项二", value: "1" },
    { label: "选项三", value: "2" }
  ],
  props: {
    label: "label",
    value: "value",
    desc: "desc",
    res: "data"
  }
};

export const dic: Resource = {
  settings: [
    {
      label: "字典类型",
      prop: "dicType",
      type: "radio",
      button: true,
      dicData: [
        { label: "静态字典", value: "static" },
        { label: "远端字典", value: "remote" }
      ],
      value: "static",
      control(val, form) {
        if (val === "remote") {
          delete form.dicData;
          form.props = defaultValue.props;
        }
        if (val === "static") {
          delete form.dicUrl;
          delete form.dicMethod;
          delete form.propsLabel;
          delete form.propsValue;
          delete form.propsDesc;
          delete form.propsRes;
          // delete form.remote;
          form.dicData = defaultValue.dicData;
          form.props = {};
        }
        return {
          dicData: { display: val === "static" },
          dicUrl: { display: val === "remote" },
          dicMethod: { display: val === "remote" },
          propsLabel: { display: val === "remote" },
          propsValue: { display: val === "remote" },
          propsDesc: { display: val === "remote" },
          propsRes: { display: val === "remote" }
          // remote: { display: val === "remote" }
        };
      }
    },
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
      value: defaultValue.dicData
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
    }
    // {
    //   label: "远程搜索",
    //   prop: "remote",
    //   type: "switch",
    //   value: false
    // }
  ]
};
