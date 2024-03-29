# ProMenu

## 基础用法

:::demo
./demo
:::

## 属性

| 名称              | 说明                  | 类型             | 可选值         | 默认值 |
| ----------------- | --------------------- | ---------------- | -------------- | ------ |
| (...menuProps)    | `el-menu`所有属性     | MenuProps        | -              | -      |
| (...subMenuProps) | `el-sub-menu`所有属性 | SubMenuProps     | -              | -      |
| v-model           | 绑定的菜单项          | string           | -              | -      |
| routes            | 路由                  | RouteRecordRaw[] | -              | -      |
| indexKey          | 菜单索引              | string           | 'name'\|'path' | 'path' |

## 事件

| 名称             | 说明                             | 回调参数                       |
| ---------------- | -------------------------------- | ------------------------------ |
| item-click       | menu-item 和 sub-menu 点击的回调 | (route:RouteRecordRaw)         |
| item-contextmenu | menu-item 和 sub-menu 右击的回调 | (route:RouteRecordRaw)         |
| select           | 菜单激活回调                     | Parameters<MenuEmits['select'] |
| open             | sub-menu 展开的回调              | Parameters<MenuEmits['open']   |
| close            | sub-menu 收起的回调              | Parameters<MenuEmits['close']  |

## 方法

| 名称  | 说明                | 参数           |
| ----- | ------------------- | -------------- |
| open  | 展开指定的 sub-menu | (index:string) |
| close | 收起指定的 sub-menu | (index:string) |

## 插槽

| 名称 | 说明             | 参数                      |
| ---- | ---------------- | ------------------------- |
| -    | 自定义菜单项内容 | \{route: RouteRecordRaw\} |

:::tip

使用插槽需要自行处理点击事件

:::

## 路由定义

<<<./props/index.ts#route-meta

## 类型定义

<<<./props/menu.ts

<<<./props/menu-item.ts
