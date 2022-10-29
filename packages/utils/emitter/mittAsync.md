# mittAsync

为 mitt 提供异步支持

## 示例

```js
const events = mittAsync();
events.on("get", async url => fetch(url).then(r => r.json()));
await events.emit("get", "/foo.json");
```
