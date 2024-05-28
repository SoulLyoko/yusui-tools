---
aside: false
---

# ProCrud

扩展AvueCrud组件,可以切换卡片和列表风格

## 卡片

:::demo
./demo/card
:::

## 列表

:::demo
./demo/list
:::

## 属性

继承AvueCrudProps,其中option扩展为[ProCrudOption](#procrudoption)

## 事件

继承AvueCrudEmits

## ProCrudOption

扩展AvueCrudOption

| 名称                          | 说明                                  | 类型           | 可选值           | 默认值 |
| ----------------------------- | ------------------------------------- | -------------- | ---------------- | ------ |
| type                          | 表格显示的风格,可切换为卡片或列表风格 | string         | 'card' \| 'list' | -      |
| [cardOption](#crudcardoption) | 卡片配置,见下方说明                   | string         |                  |        |
| [listOption](#crudlistoption) | 列表配置,见下方说明                   | CrudListOption |                  |        |

## CrudCardOption

| 名称           | 说明                           | 类型                     | 可选值             | 默认值   |
| -------------- | ------------------------------ | ------------------------ | ------------------ | -------- |
| icon           | 图标字段名或通过函数返回内容   | string\|(row,index)=>any |                    |          |
| title          | 标题字段名或通过函数返回内容   | string\|(row,index)=>any |                    |          |
| subtitle       | 副标题字段名或通过函数返回内容 | string\|(row,index)=>any |                    |          |
| content        | 内容字段名或通过函数返回内容   | string\|(row,index)=>any |                    |          |
| actionPosition | 菜单位置                       | string                   | 'header'\|'footer' | 'footer' |
| size           | 组件大小                       | string                   |                    |          |
| labelWidth     | 标题宽度                       | string\|number           |                    |          |
| labelPosition  | 标题位置                       | string                   |                    |          |
| labelSuffix    | 标题后缀                       | string                   |                    |          |
| span           | 栅格                           | number                   |                    | 6        |
| gutter         | 间隔                           | number                   |                    | 10       |

## CrudListOption

| 名称     | 说明                           | 类型                     | 可选值 | 默认值 |
| -------- | ------------------------------ | ------------------------ | ------ | ------ |
| icon     | 图标字段名或通过函数返回内容   | string\|(row,index)=>any |        |        |
| title    | 标题字段名或通过函数返回内容   | string\|(row,index)=>any |        |        |
| subtitle | 副标题字段名或通过函数返回内容 | string\|(row,index)=>any |        |        |
| content  | 内容字段名或通过函数返回内容   | string\|(row,index)=>any |        |        |

## 插槽

继承AvueCrudSlots,并扩展以下插槽

| 名称          | 说明           | 参数         |
| ------------- | -------------- | ------------ |
| item-icon     | 数据项的图标   | \{row,index} |
| item-title    | 数据项的标题   | \{row,index} |
| item-subtitle | 数据项的子标题 | \{row,index} |
| item-content  | 数据项的内容   | \{row,index} |
