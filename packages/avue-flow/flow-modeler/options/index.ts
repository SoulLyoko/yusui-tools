export * from "./assignee";
export * from "./base";
export * from "./button";
export * from "./executionListener";
export * from "./formproperty";
export * from "./listener";
export * from "./multiInstance";
export * from "./process";
export * from "./property";
export * from "./sequenceFlow";
export * from "./serial";
export * from "./serviceTask";
export * from "./taskListener";
export * from "./timelimit";
export * from "./userTask";

import { baseColumns } from ".";

export const defaultGroup = [{ label: "基本配置", prop: "base", column: baseColumns }];
