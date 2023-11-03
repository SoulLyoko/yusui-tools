# useOverlay

命令式使用弹窗

:::tip
需要将ElDialog,ElDrawer,ElOverlay注册为全局组件
:::

## 基础用法

:::demo
./demo
:::

## UseOverlayOptions

| 名称            | 类型                              | 默认值   | 说明                 |
| --------------- | --------------------------------- | -------- | -------------------- |
| ...dialogProps  | DialogProps                       |          | ElDialog的属性和事件 |
| ...drawerProps  | DrawerProps                       |          | ElDrawer的属性和事件 |
| ...overlayProps | OverlayProps                      |          | ElOverlay的属性      |
| type            | 'dialog' \| 'drawer' \| 'overlay' | 'dialog' | 打开弹窗的类型       |
| header          | RawChildren                       |          | 头部插槽             |
| default         | RawChildren                       |          | 中间内容插槽         |
| footer          | RawChildren                       |          | 底部插槽             |
| appContext      | AppContext                        |          | 应用上下文           |

## UseOverlayReturn

| 名称  | 类型                                  | 说明         |
| ----- | ------------------------------------- | ------------ |
| open  | (options?: UseOverlayOptions) => void | 打开弹窗函数 |
| close | (delay?: number) => void              | 关闭弹窗函数 |

## 类型定义

<<<./types.ts
