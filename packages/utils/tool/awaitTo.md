# awaitTo/to

try catch 的替代方案

## 示例

```js
// to = awaitTo
const [err, res] = await to(getList());
if (err) return ElMessage.error(err);
```

## 参数

| 名称     | 说明               | 类型   | 可选值 | 默认值 |
| -------- | ------------------ | ------ | ------ | ------ |
| promise  | 传入执行的 promise | Object | -      | -      |
| errorExt | 自定义错误数据对象 | Object | -      | -      |

## 返回值

([Error|null,any|undefine]): 返回一个数组，数组第一项为 Promise 执行失败抛出的错误，第二项为 Promise 执行成功的返回值
