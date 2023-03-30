import type { Resource } from "../types";

import { alignDic } from "../options";

export const dynamic: Resource = {
  name: "dynamic",
  title: "子表单",
  icon: "el-icon-grid",
  group: "表单组件",
  isContainer: true,
  rules: {
    parentWhiteList: ["form", "group"],
    childBlackList: ["group", "dynamic"]
  },
  designOption: element => {
    const { label, prop } = element.props ?? {};
    return {
      column: [{ label, prop, type: "text" }]
    };
  },
  props: { type: "dynamic", label: "子表单", children: { column: [] } },
  settings: [
    {
      prop: "children",
      labelWidth: 0,
      component: "avue-form",
      option: {
        labelWidth: 100,
        menuBtn: false,
        span: 24,
        column: [
          {
            label: "展示类型",
            prop: "type",
            type: "radio",
            button: true,
            value: "crud",
            dicData: [
              { label: "表格", value: "crud" },
              { label: "表单", value: "form" }
            ],
            control(type: string, form: any) {
              const isForm = type === "form";
              const isCrud = type === "crud";
              form.index = isForm ? false : "";
              return {
                showHeader: { display: isCrud },
                stripe: { display: isCrud },
                border: { display: isCrud },
                headerAlign: { display: isCrud },
                align: { display: isCrud },
                index: { display: isForm },
                span: { display: isForm }
              };
            }
          },
          {
            label: "显示新增按钮",
            prop: "addBtn",
            type: "switch",
            modelValue: true
          },
          {
            label: "显示删除按钮",
            prop: "delBtn",
            type: "switch",
            modelValue: true
          },
          {
            label: "显示表头",
            prop: "showHeader",
            type: "switch",
            modelValue: true
          },
          {
            label: "表格边框",
            prop: "border",
            type: "switch",
            modelValue: true
          },
          {
            label: "斑马纹",
            prop: "stripe",
            type: "switch",
            modelValue: false
          },
          {
            label: "表头对齐方式",
            prop: "headerAlign",
            type: "radio",
            button: true,
            dicData: alignDic
          },
          {
            label: "对齐方式",
            prop: "align",
            type: "radio",
            button: true,
            dicData: alignDic
          },
          {
            label: "显示序号",
            prop: "index",
            type: "switch"
          },
          {
            label: "表单项栅格",
            prop: "span",
            type: "number"
          },
          {
            label: "空数据文字",
            prop: "emptyText",
            type: "number"
          }
        ]
      }
    }
  ]
  //   .map(e => {
  //   return {
  //     ...e,
  //     prop: `children${e.prop}`,
  //     bind: `children.${e.prop}`
  //   };
  // })
};
