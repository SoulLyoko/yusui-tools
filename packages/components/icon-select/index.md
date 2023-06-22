# IconSelect

Iconify 的图标选择器

::: tip
如果浏览器支持 Clipboard API (localhost 或 https)，会自动将复制的 icon 回填到输入框中
:::

## 基础用法

:::demo
./demo
:::


## 属性

| 名称        | 说明                         | 类型            | 可选值                | 默认值    |
| ----------- | ---------------------------- | --------------- | --------------------- | --------- |
| v-model     | 绑定的值                     | String          | -                     | -         |
| source      | 图标来源网站                 | String          | "iconify" \| "icones" | "iconify" |
| collections | 指定图标集字符串或本地图标集 | String \| Array | -                     | -         |
| width       | 弹出层宽度                   | Number          | -                     | 800       |
| height      | 弹出层高度                   | Number          | -                     | 400       |
