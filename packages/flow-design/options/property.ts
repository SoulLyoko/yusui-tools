export interface PropertyItem {
  name?: string;
  value?: string;
}

export const property = {
  label: "",
  labelWidth: 0,
  prop: "property",
  type: "dynamic",
  children: {
    column: [
      { label: "属性名", prop: "name" },
      { label: "属性值", prop: "value", type: "textarea", minRows: 1 }
    ]
  },
  value: []
};

export const propertyColumn = [property];
