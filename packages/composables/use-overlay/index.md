# useOverlay

命令式使用弹窗

## 基础用法

:::demo
./demo
:::

## UseOverlayOptions

| 名称           | 类型                             | 默认值   | 说明                 |
| -------------- | -------------------------------- | -------- | -------------------- |
| ...dialogProps | DialogProps                      |          | ElDialog的属性和事件 |
| ...drawerProps | DrawerProps                      |          | ElDrawer的属性和事件 |
| type           | 'dialog' \| 'drawer'             | 'dialog' | 打开弹窗的类型       |
| header         | string \| VNode \| (() => VNode) |          | 头部插槽             |
| content        | string \| VNode \| (() => VNode) |          | 中间内容插槽         |
| footer         | string \| VNode \| (() => VNode) |          | 底部插槽             |

## UseOverlayReturn

| 名称    | 类型                                  | 说明                     |
| ------- | ------------------------------------- | ------------------------ |
| open    | (options?: UseOverlayOptions) => void | 打开弹窗函数             |
| close   | () => void                            | 关闭弹窗函数             |
| visible | Ref\<boolean>                         | 弹窗是否可见(用于组件式弹窗) |

## 类型定义

<<<./types.ts
