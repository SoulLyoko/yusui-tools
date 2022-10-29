# getDataType

获取数据类型

## 示例

```js
getDataType(true); // "Boolean"

getDataType(null); // "Null"

getDataType(undefined); // "Undefined"

getDataType(123); // "Number"

getDataType("123"); // "String"

getDataType(Symbol()); // "Symbol"

getDataType([]); // "Array"

getDataType({}); // "Object"

getDataType(() => {}); // "Function"

getDataType(new Date()); // "Date"

getDataType(new RegExp("")); // "RegExp"
```
