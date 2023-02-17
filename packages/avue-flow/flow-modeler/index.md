---
aside: false
---

# FlowModeler

FlowModeler

## 基础用法

<script setup>
import Demo from "./demo.vue"
</script>

<Demo></Demo>

<<< @/avue-flow/flow-modeler/demo.vue

## 属性

| 属性名               | 说明                   | 类型                            | 可选值 | 默认值 |
| -------------------- | ---------------------- | ------------------------------- | ------ | ------ |
| lf(v-model)          | LogicFlow 实例         | LogicFlow                       |        |        |
| initOptions          | LogicFlow 初始化配置   | Object                          |        |        |
| modelValue(v-model)  | 流程图数据             | Object                          |        |        |
| elementData(v-model) | 当前选中的元素         | NodeConfig\|EdgeConfig          |        |        |
| formData(v-model)    | 当前选中元素的表单数据 | Object                          |        |        |
| formOptions          | 表单配置               | Record<string, AvueFormGroup[]> |        |        |
| formWidth            | 表单宽度               | string                          |        | 300px  |
