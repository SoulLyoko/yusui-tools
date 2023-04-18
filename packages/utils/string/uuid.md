# uuid

生成 uuid，基数为 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

## 示例

```js
uuid() // 默认16位长度
uuid(8) // 生成8位长度
uuid(8, 10) // 生成8位长度，基数为0-9
```

## 参数

| 名称   | 说明       | 类型   | 可选值 | 默认值 |
| ------ | ---------- | ------ | ------ | ------ |
| length | 生成的长度 | Number | -      | 16     |
| radix  | 基数长度   | Number | -      | 62     |

## 返回值

(String): 生成的 uuid
