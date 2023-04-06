import type { AvueCrudOption } from "@smallwei/avue";
import type { FlowOps } from "../api/flow-ops";

import { enumToDic } from "@yusui/utils";

import { TaskStatus } from "../api/flow-ops";

export const tableOption: AvueCrudOption<FlowOps> = {
  rowKey: "id",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  menu: false,
  column: [
    { label: "流程名称", prop: "flowName" },
    { label: "流程标识", prop: "flowKey" },
    { label: "流程分类", prop: "groupId" },
    { label: "标题", prop: "processTitle" },
    { label: "流水号", prop: "serialNumber" },
    { label: "当前节点", prop: "taskNodeName" },
    { label: "审批人", prop: "assigneeName" },
    { label: "申请人", prop: "applyUserName" },
    { label: "接收时间", prop: "createTime" },
    {
      label: "任务状态",
      prop: "status",
      type: "select",
      dicData: enumToDic(TaskStatus)
    }
  ]
};
