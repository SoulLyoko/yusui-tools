export const priorityColumn = {
  label: "优先级",
  prop: "priority"
};

export const rollbackNodeColumn = {
  label: "驳回节点",
  prop: "rollbackNode",
  type: "select",
  params: { filterType: "bpmn:UserTask" }
};

export const backToRejecterColumn = {
  label: "重新提交后回到驳回人",
  prop: "backToRejecter",
  type: "switch",
  dicData: [
    { label: "否", value: "false" },
    { label: "是", value: "true" }
  ]
};

export const userTaskColumns = [priorityColumn, rollbackNodeColumn, backToRejecterColumn];
