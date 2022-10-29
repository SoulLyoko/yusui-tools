# getFileName

从 url 中获取文件名

## 示例

```js
getFileName("/file/content.docx"); // content.docx

getFileName("/file/content.docx", false); // content

getFileName("/file/content.test.docx", false); // content.test
```

## 参数

| 名称    | 说明               | 类型    | 可选值 | 默认值 |
| ------- | ------------------ | ------- | ------ | ------ |
| fileUrl | 文件地址           | String  | -      | -      |
| ext     | 是否返回文件扩展名 | Boolean | -      | true   |

## 返回值

(String): 文件名
