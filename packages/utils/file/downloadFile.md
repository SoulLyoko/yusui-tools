# downloadFile

下载文件，使用 file-saver 的实现，针对 pdf 做处理

## 示例

```js
// 使用file-saver下载pdf在某些浏览器会自动打开预览
// 若不需要预览则可以使用downloadFile处理
downloadFile("/file/content.pdf");

downloadFile("/file/content.docx");

downloadFile(new Blob(["123"]), "test.txt");
```

## 参数

| 名称     | 说明                       | 类型           | 可选值 | 默认值 |
| -------- | -------------------------- | -------------- | ------ | ------ |
| data     | 可以是下载地址或 blob 文件 | String \| Blob | -      | -      |
| filename | 文件名                     | String         | -      | -      |

## 返回值

无
