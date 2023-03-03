import type { Resource } from "../types";

import MonacoEditor from "../setters/monaco-editor/index.vue";
import DicDataSetter from "../setters/dic-data-setter/index.vue";
import { getRandomId, jsonStringify } from "../utils";

const defaultProps = {
  label: "label",
  value: "value",
  desc: "desc",
  disabled: "disabled",
  children: "children",
  res: "res"
};

export function useDicSettings(tree = false) {
  const dicDataSelect = {
    component: DicDataSetter,
    value: [
      { label: "选项一", value: "0" },
      { label: "选项二", value: "1" },
      { label: "选项三", value: "2" }
    ]
  };
  const dicDataTree = {
    component: DicDataSetter,
    setterType: "tree",
    value: [
      {
        label: "选项1",
        value: "1",
        id: getRandomId(),
        children: [
          { label: "选项1-1", value: "11", id: getRandomId() },
          { label: "选项1-2", value: "12", id: getRandomId() }
        ]
      },
      { label: "选项2", value: "2", id: getRandomId() },
      { label: "选项3", value: "3", id: getRandomId() }
    ]
  };
  return [
    {
      label: "字典类型",
      prop: "dicType",
      type: "radio",
      button: true,
      labelWidth: 72,
      dicData: [
        { label: "静态字典", value: "static" },
        { label: "远端字典", value: "remote" }
      ],
      value: "static",
      control(dicType, form) {
        const isStatic = dicType === "static";
        const isRemote = dicType === "remote";
        if (isStatic) {
          delete form.dicUrl;
          delete form.dicMethod;
          delete form.props;
          delete form.dicFormatter;
        }
        return {
          dicData: { display: isStatic },
          dicUrl: { display: isRemote },
          dicMethod: { display: isRemote },
          dicQuery: { display: isRemote },
          dicHeaders: { display: isRemote },
          props: { display: isRemote },
          dicFormatter: { display: isRemote }
        };
      }
    },
    {
      label: "字典数据",
      prop: "dicData",
      labelPosition: "top",
      ...(tree ? dicDataTree : dicDataSelect)
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
      label: "请求参数",
      prop: "dicQuery",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: "{}"
    },
    {
      label: "请求头",
      prop: "dicHeaders",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: "{}"
    },
    {
      label: "字典配置",
      prop: "props",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: jsonStringify(defaultProps)
    },
    {
      label: "字典格式化",
      prop: "dicFormatter",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: "(res) => res"
    }
  ] as NonNullable<Resource["settings"]>;
}
