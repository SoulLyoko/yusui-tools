# arrayToMap

数组转键值对对象

## 示例

```js
const list = [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
const result = arrayToMap(list, 'value')
// result:
// {
//   value1: { label: 'label1', value: 'value1' },
//   value2: { label: 'label2', value: 'value2' },
// }
```

## 参数

| 名称 | 说明                           | 类型             | 可选值 | 默认值 |
| ---- | ------------------------------ | ---------------- | ------ | ------ |
| list | 需要转换的数组                 | Array            | -      | -      |
| key  | 数组里每一项对应的唯一值的键名 | String \| Number | -      | -      |

## 返回值

(Obejct): 转换后的对象
