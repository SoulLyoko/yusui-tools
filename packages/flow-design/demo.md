---
aside: false
---

# FlowDesign

FlowDesign

## 基础用法

:::demo
./demo
:::

## 属性

| 属性名               | 说明                   | 类型                            | 可选值   | 默认值 |
| -------------------- | ---------------------- | ------------------------------- | -------- | ------ |
| lf(v-model)          | LogicFlow 实例         | LogicFlow                       |          |        |
| initOptions          | LogicFlow 初始化配置   | Object                          |          |        |
| modelValue(v-model)  | 流程图数据             | Object                          |          |        |
| elementData(v-model) | 当前选中的元素         | NodeConfig\|EdgeConfig          |          |        |
| formData(v-model)    | 当前选中元素的表单数据 | Object                          |          |        |
| formOptions          | 表单配置               | Record<string, AvueFormGroup[]> |          |        |
| formOption           | 当前选中元素的表单配置 | AvueFormOption                  |          |        |
| formDefaults         | 当前表单控制配置       | AvueFormDefaults                |          |        |
| formWidth            | 表单宽度               | string                          |          | 300px  |
| dataOptions          | 表单配置数据           | Object                          |          |        |
| type                 | 查看器模式             | string                          | 'viewer' |        |
| styles               | 节点样式(查看器模式)   | StyleItem[]                     |          |        |
| tooltips             | 节点提示框(查看器模式) | TooltipItem[]                   |          |        |

