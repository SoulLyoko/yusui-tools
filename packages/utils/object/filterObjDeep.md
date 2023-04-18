# filterObjDeep

递归过滤对象值和字段

## 示例

```js
const exampleData = { a: undefined, b: { bb: '1' }, c: [{ cc: 1 }] }

filterObjDeep(testData) // { b: { bb: "1" }, c: [{ cc: 1 }] }

filterObjDeep(testData, []) // { a: undefined, b: { bb: "1" }, c: [{ cc: 1 }] }

filterObjDeep(testData, undefined, ['bb', 'cc']) // { b: {}, c: [{}] }
```

## 参数

| 名称   | 说明                 | 类型   | 可选值 | 默认值            |
| ------ | -------------------- | ------ | ------ | ----------------- |
| obj    | 被过滤对象           | Object | -      | -                 |
| values | 被过滤的值，全等匹配 | Array  | -      | [undefined, null] |
| fields | 被过滤字段，模糊匹配 | Array  | -      | []                |

## 返回值

(Object): 过滤后的对象
