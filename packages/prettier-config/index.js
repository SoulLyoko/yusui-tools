module.exports = {
  arrowParens: "avoid", // 箭头函数仅有一个参数时，参数也添加括号
  bracketSameLine: false, // 如果HTML元素(包括JSX等)具有多个属性，将其结束标签右尖括号>放在最后个属性的末尾，而不是另起一行
  bracketSpacing: true, // 对象花括号内的两旁添加空格
  embeddedLanguageFormatting: "auto", // 对引号中代码使用智能格式化
  enable: true, // 启用prettier
  enableDebugLogs: true, // 启用调试日志
  endOfLine: "auto", // 指定文件的结尾换行符
  htmlWhitespaceSensitivity: "css", // 指定 HTML 元素是在「内容内换行」还是在「属性与右尖括号内换行」，前者可能导致内联元素渲染出额外的空格。选项：css──块级元素采用前者，内联元素采用后者、 strict──全部采用后者、 ignore──全部采用后者。
  insertPragma: false, // 格式化的同时自动插入 @format 的特殊注释，以表示该文件已被 Prettier 格式化过
  jsxSingleQuote: false, // JSX 中使用单引号而不是双引号
  printWidth: 120, // 指定每行代码的最佳长度，如果超出该长度则格式化
  proseWrap: "preserve", // 指定在 Markdown 文本的换行方式。选项：always──超过 print-width 时换行、 never──不换行、 preserve──不进行任何操作，保持原样
  quoteProps: "as-needed", // 指定对象中 key 的引号添加方式。选项： as-needed──只有在需求要的情况下加引号、 consistent──有一个需要引号就给其他都统一加上、 preserve──保留用户输入的引号
  requirePragma: false, // 只对在开头含有特定注释（如 @format ）的文件进行格式化
  resolveGlobalModules: false, // 在当前 node_modules 无法解析时使用全局 node_modules 。可能造成性能上的影响
  semi: true, // 在所有代码语句的末尾添加分号
  singleAttributePerLine: false, // 如果 HTML元素（包括 JSX 等）具有多个属性，将其每个属性格式化为单独占一行
  singleQuote: false, // 使用单引号而不是双引号
  tabWidth: 2, // 指定一个制表符等于的空格数
  trailingComma: "none", // 指定添加尾后逗号的方式。选项：none──无尾后逗号、 es5──在 ES5 中有效的尾后逗号（如对象与数组等）、 all──尽可能添加尾后逗号（如函数参数）
  useEditorConfig: true, // 使用 .editorconfig 中的配置方案。
  useTabs: false, // 使用 Tab 缩进，而不是空格缩进
  vueIndentScriptAndStyle: false, // 缩进 Vue 的 <script> 和 <style> 标签。
  withNodeModules: false, // 允许 Prettier 格式化 node_modules 中的文件
  useWorkaroundForFormatters: false // 启用对 Prettier 等格式化工具的一个解决方案。若不启用该方案时格式化，本扩展收不到文件变更通知，书签的定位会被扰乱。
};
