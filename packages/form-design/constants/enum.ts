export enum DesignAction {
  copy = '复制',
  delete = '删除',
  clear = '清空',
}
export type DesignActionKey = keyof typeof DesignAction
export type DesignActionValue = `${DesignAction}`

export enum HistoryType {
  init = '初始化',
  added = '添加组件',
  moved = '移动组件',
  removed = '删除组件',
  property = '修改属性',
  clear = '清空子组件',
}
export type HistoryTypeKey = keyof typeof HistoryType
export type HistoryTypeValue = `${HistoryType}`
