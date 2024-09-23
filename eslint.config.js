import antfu from '@antfu/eslint-config'

export default antfu(
  { formatters: true, regexp: false },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off', // 允许忽略规则
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // 类型导入放在顶层
      'no-console': 'off', // 允许console
      'perfectionist/sort-imports': ['error', { // 导入排序
        internalPattern: ['#/**', '~/**', '@/**'],
        groups: ['type', 'builtin', 'external', 'internal'],
      }],
      'ts/ban-ts-comment': 'off', // 允许忽略类型检查
      'ts/prefer-ts-expect-error': 'off', // 允许忽略类型检查
      'unused-imports/no-unused-imports': 'error', // 不允许未使用的导入
    },
  },
  {
    files: ['**/*.md/*'],
    rules: {
      'unused-imports/no-unused-imports': 'off', // md文件允许未使用的导入
      'antfu/no-top-level-await': 'off', // md文件允许顶层await
    },
  },
)
