export const priority = {
  label: "优先级",
  prop: "priority"
};

export const rollbackNode = {
  label: "驳回节点",
  prop: "rollbackNode",
  type: "select",
  params: { filterType: "bpmn:UserTask" }
};

export const backToRejecter = {
  label: "重新提交后回到驳回人",
  prop: "backToRejecter",
  type: "switch",
  value: false
};

export const userTaskColumn = [priority, rollbackNode, backToRejecter];
