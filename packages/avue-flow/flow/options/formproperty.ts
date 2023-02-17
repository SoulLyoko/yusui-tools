import FlowCheckbox from "../flow-modeler/components/flow-checkbox.vue";
import FlowText from "../flow-modeler/components/flow-text.vue";

export interface FormpropertyItem {
  label?: string;
  prop?: string;
  display?: string;
  disabled?: string;
  detail?: string;
  required?: string;
}

export const formpropertyColumn = {
  label: "",
  labelWidth: 0,
  prop: "formproperty",
  type: "dynamic",
  children: {
    addBtn: false,
    delBtn: false,
    column: [
      { prop: "_index", hide: true },
      { label: "字段", prop: "label", component: FlowText },
      { label: "属性", prop: "prop", component: FlowText },
      { label: "显示", prop: "display", width: 40, component: FlowCheckbox },
      { label: "禁用", prop: "disabled", width: 40, component: FlowCheckbox },
      { label: "详情", prop: "detail", width: 40, component: FlowCheckbox },
      { label: "必填", prop: "required", width: 40, component: FlowCheckbox }
    ]
  },
  value: []
};
