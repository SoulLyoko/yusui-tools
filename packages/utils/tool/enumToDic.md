# enumToDic

将 enum 转换为字典

## 示例

```ts
enum Status {
  '失败' = 0,
  '成功' = 1
}
const dic = enumToDic(Status) // [{ label: "失败", value: 0 },{ label: "成功", value: 1 }]
```

## 参数

| 名称  | 说明            | 类型  | 可选值 | 默认值 |
| ----- | --------------- | ----- | ------ | ------ |
| enum  | 需要转换的 enum | enum  | -      |        |
| props | 参数配置        | Props | -      |        |

## Props

| 名称  | 说明              | 类型   | 可选值 | 默认值  |
| ----- | ----------------- | ------ | ------ | ------- |
| label | 作为 label 的键名 | string | -      | "label" |
| value | 作为 value 的键名 | string | -      | "value" |

## 返回值

(Array): 返回字典数组
