export interface ListenerItem {
  eventName?: string;
  eventType?: string;
  eventValue?: string;
  fields?: {
    fieldName?: string;
    fieldType?: string;
    fieldValue?: string;
  }[];
}

export function useListenerColumn(
  prop: `${string}Listener`,
  dic: { eventName?: any[]; eventType?: any[]; fieldType?: any[] } = {}
) {
  const eventNameDic = dic.eventName || [];
  const eventTypeDic = dic.eventType || [
    { label: "类", value: "class" },
    { label: "表达式", value: "expression" },
    { label: "代理表达式", value: "delegateExpression" }
  ];
  const fieldTypeDic = dic.fieldType || [
    { label: "字符串", value: "string" },
    { label: "表达式", value: "expression" }
  ];
  return {
    label: "",
    labelWidth: 0,
    prop: prop as string,
    type: "dynamic",
    children: {
      type: "form" as const,
      index: false,
      column: [
        { label: "事件", prop: "eventName", type: "select", dicData: eventNameDic },
        { label: "类型", prop: "eventType", type: "select", dicData: eventTypeDic },
        { label: "值", prop: "eventValue", type: "textarea", minRows: 1, span: 24 },
        {
          label: "字段",
          prop: "fields",
          type: "dynamic",
          span: 24,
          children: {
            column: [
              { label: "字段名", prop: "fieldName" },
              { label: "类型", prop: "fieldType", type: "select", dicData: fieldTypeDic },
              { label: "值", prop: "fieldValue" }
            ]
          }
        }
      ]
    }
  };
}
