# dateFormat

格式化日期时间

## 示例

```js
const date = '2022-02-22 22:22:22'
dateFormat(date) // 2022-02-22

dateFormat(date, { date: true, time: false }) // 2022-02-22

dateFormat(date, { date: false, time: true }) // 22:22:22

dateFormat(date, { date: true, time: true }) // 2022-02-22 22:22:22

dateFormat(date, { locale: 'zh' }) // 2022年2月22日 22点22时22分

dateFormat(date, 'YYYY/MM/DD') // 2022/02/22
```

## 参数

| 名称            | 说明                         | 类型                              | 可选值 | 默认值 |
| --------------- | ---------------------------- | --------------------------------- | ------ | ------ |
| date            | 需要格式化的日期时间         | String\|Number\|Date\|dayjs.Dayjs | -      | -      |
| optionsOrFormat | 传入格式化参数或格式化字符串 | DateFormatOptions\|String         | -      | {}     |

### DateFormatOptions

| 名称   | 说明         | 类型    | 可选值     | 默认值 |
| ------ | ------------ | ------- | ---------- | ------ |
| date   | 是否显示日期 | Boolean | -          | true   |
| time   | 是否显示时间 | Boolean | -          | false  |
| locale | 显示的语言   | String  | "en"\|"zn" | "en"   |

## 返回值

(String): 格式化后的日期时间
