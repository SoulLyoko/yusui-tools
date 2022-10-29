# filterObj

过滤对象值和字段

## 示例

```js
const exampleData = { a: 1, b: "b", c: undefined, d: null };

filterObj(exampleData); // { a: 1, b: "b" }

filterObj(exampleData, []); // { a: 1, b: "b", c: undefined, d: null }

filterObj(exampleData, undefined, ["a", "b"]); // {}
```

## 参数

| 名称   | 说明                 | 类型   | 可选值 | 默认值            |
| ------ | -------------------- | ------ | ------ | ----------------- |
| obj    | 被过滤对象           | Object | -      | -                 |
| values | 被过滤的值，全等匹配 | Array  | -      | [undefined, null] |
| fields | 被过滤字段，模糊匹配 | Array  | -      | []                |

## 返回值

(Object): 过滤后的对象
