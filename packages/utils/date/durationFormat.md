# durationFormat

时长格式化

## 示例

```js
const duration = 337736260 // ms
durationFormat(duration) // 4天
durationFormat(duration, true) // 03天21小时48分钟56秒
```

## 参数

| 名称     | 说明                      | 类型           | 可选值 | 默认值 |
| -------- | ------------------------- | -------------- | ------ | ------ |
| duration | 需要格式化的时长，单位 ms | Number\|String | -      | -      |
| detail   | 是否显示精确的时长        | Boolean        | -      | false  |

## 返回值

(String): 格式化后的时长
