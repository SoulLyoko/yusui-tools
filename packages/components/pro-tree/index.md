# ProTree

## 基础用法

:::demo
./demo
:::

## 属性

| 名称               | 说明               | 类型                                     | 可选值 | 默认值 |
| ------------------ | ------------------ | ---------------------------------------- | ------ | ------ |
| (...ElTree.props)  | `el-tree`所有属性  | TreeComponentProps                       | -      | -      |
| (...ElInput.props) | `el-input`所有属性 | InputProps                               | -      | -      |
| v-model            | 绑定的值           | string \| number \| string[] \| number[] | -      | -      |
| multiple           | 是否多选           | boolean                                  | -      | -      |
| tagType            | 标签类型           | string                                   | -      | -      |

## 事件

| 名称               | 说明               | 回调参数                 |
| ------------------ | ------------------ | ------------------------ |
| (...ElTree.emits)  | `el-tree`所有事件  |                          |
| (...ElInput.emits) | `el-input`所有事件 |                          |
| tag-click          | 标签点击事件       | (node: TreeNode) => void |
| tag-close          | 标签移除事件       | (node: TreeNode) => void |

## 方法

| 名称 | 说明                 | 参数 |
| ---- | -------------------- | ---- |
|      | `el-tree`的所有方法  |      |
|      | `el-input`的所有方法 |      |

## 插槽

| 名称 | 说明               | 参数 |
| ---- | ------------------ | ---- |
|      | `el-tree`所有插槽  |      |
|      | `el-input`所有插槽 |      |
