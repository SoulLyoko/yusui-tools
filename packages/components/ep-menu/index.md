# EpMenu

## 基础用法

:::demo
./demo
:::

## 属性

| 名称              | 说明                  | 类型           | 可选值         | 默认值 |
| ----------------- | --------------------- | -------------- | -------------- | ------ |
| (...menuProps)    | `el-menu`所有属性     | MenuProps      | -              | -      |
| (...subMenuProps) | `el-sub-menu`所有属性 | SubMenuProps   | -              | -      |
| v-model           | 绑定的菜单项          | String         | -              | -      |
| routes            | 路由                  | RouteRecordRaw | -              | -      |
| indexKey          | 菜单索引              | String         | 'name'\|'path' | 'path' |

## 路由定义

<<<./types/index.ts#route-meta
