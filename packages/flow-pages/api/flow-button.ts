import type { ButtonType } from "element-plus";
import type { Page, ResRecords } from "@yusui/types";

import { request, useRequest } from ".";

export enum FlowButtonType {
  "默认" = "default",
  "主要" = "primary",
  "成功" = "success",
  "警告" = "warning",
  "危险" = "danger",
  "信息" = "info",
  "文字" = "text"
}

export enum FlowButtonKey {
  "保存草稿" = "flow_draft",
  "发送" = "flow_pass",
  "退回" = "flow_reject",
  "终止" = "flow_terminate",
  "发起人撤回" = "flow_withdraw",
  "打印" = "flow_print",
  "转办" = "flow_transfer",
  "加签" = "flow_add_instance",
  "减签" = "flow_del_instance",
  "指定回退" = "flow_rollback",
  "绿色通道" = "flow_green"
}

export enum FlowButtonDisplay {
  "显示" = "true",
  "隐藏" = "false",
  "发起人" = "startUser",
  "处理人" = "assignee",
  "未发起" = "notstarted",
  "已发起" = "started",
  "未办结" = "unfinished",
  "已办结" = "finished"
}

export enum FlowButtonApproval {
  "不显示" = "false",
  "审批人" = "approver",
  "抄送人" = "copyUser",
  "意见" = "comment"
}

export enum FlowButtonStatus {
  "禁用" = 0,
  "正常" = 1
}

/** 按钮配置 */
export interface FlowButton {
  id?: string;
  /** 按钮的key */
  buttonKey?: FlowButtonKey;
  /** element的按钮类型 */
  buttonType?: ButtonType;
  /** 显示类型 */
  display?: FlowButtonDisplay;
  /** 审批弹窗显示 */
  approval?: FlowButtonApproval;
  /** 按钮图标 */
  icon?: string;
  /** 按钮名称 */
  name?: string;
  /** 排序 */
  sort?: number;
  /** 0 正常 | 1 禁用 */
  status?: FlowButtonStatus;
}

// 获取按钮列表
export function getList(params: Page & FlowButton) {
  return request.get<ResRecords<FlowButton[]>>("/sapier-flow/dev-button/list", { params });
}
export function useFlowButtonList() {
  return useRequest(() => getList({ size: -1, ascs: "sort" }).then(res => res.data.records));
}

// 新增
export function create(data: FlowButton) {
  return request.post("/sapier-flow/dev-button/save", data);
}

// 修改
export function update(data: FlowButton) {
  return request.post("/sapier-flow/dev-button/update", data);
}

// 删除
export function remove(ids: string) {
  return request.post("/sapier-flow/dev-button/remove", {}, { params: { ids } });
}
