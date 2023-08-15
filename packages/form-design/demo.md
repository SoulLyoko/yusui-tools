---
aside: false
---

# FormDesign

## 基本使用
:::demo
./demo
:::


## 属性

| 名称          | 说明                                | 类型                                        | 可选值 | 默认值     |
| ------------- | ----------------------------------- | ------------------------------------------- | ------ | ---------- |
| v-model       | 绑定的值                            | AvueFormOpition                             | -      | -          |
| groupList     | 左侧分组,可以用来修改排序或显示状态 | string[]                                    | -      | -          |
| resources     | 定义物料库及其可配置项              | Record<string,Resource>                     | -      | -          |
| baseOption    | 定义选中组件时右侧的基础配置        | Resource['settings']                        | -      | -          |
| advanceOption | 定义选中组件时右侧的高级配置        | Resource['settings']                        | -      | -          |
| leftWidth     | 左侧宽度                            | string                                      | -      | 200px      |
| rightWidth    | 右侧宽度                            | string                                      | -      | 200px      |
| adapterIn     | 输入格式化                          | (option: AvueFormOption) => ElementTreeNode | -      | adapterIn  |
| adapterOut    | 输出格式化                          | (tree: ElementTreeNode) => AvueFormOption   | -      | adapterOut |

## Resource 

| 名称             | 说明                             | 类型                         | 可选值 | 默认值 |
| ---------------- | -------------------------------- | ---------------------------- | ------ | ------ |
| name             | 组件定义名称(唯一)               | string                       | -      | -      |
| title            | 组件中文名称                     | string                       | -      | -      |
| icon             | 组件图标                         | string                       | -      | -      |
| description      | 组件描述                         | string                       | -      | -      |
| docUrl           | 文档链接                         | string                       | -      | -      |
| keywords         | 组件关键词,用于搜索联想          | string                       | -      | -      |
| group            | 用于描述组件位于组件面板哪个分组 | string                       | -      | -      |
| priority         | 用于描述组件在同一分组中的排序   | number                       | -      | -      |
| isContainer      | 用于描述组件是否为容器(如子表单) | boolean                      | -      | -      |
| designOption     | 设计面板渲染配置                 | AvueFormOption \| Function   | -      | -      |
| disabled         | 禁用组件，将不会出现在组件面板中 | boolean                      | -      | -      |
| disabledActions  | 设计面板中禁用复制、删除等动作   | DesignAction[]               | -      | -      |
| disabledSettings | 属性面板中禁用的设置             | string[]                     | -      | -      |
| props            | 配置面板的默认值                 | boolean                      | -      | -      |
| settings         | 配置面板                         | AvueFormColumn[] \| Function |        | -      |
| rules            | 拖放规则                         |                              | -      | -      |

## 类型定义

::: details
<<< @/form-design/types/index.ts
:::
