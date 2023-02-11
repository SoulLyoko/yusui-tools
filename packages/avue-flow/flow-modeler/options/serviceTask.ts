export const classColumn = {
  label: "类",
  prop: "class"
};

export const asyncColumn = {
  label: "异步",
  prop: "async",
  type: "switch",
  dicData: [
    { label: "否", value: "false" },
    { label: "是", value: "true" }
  ]
};

export const serviceTaskColumns = [classColumn, asyncColumn];
