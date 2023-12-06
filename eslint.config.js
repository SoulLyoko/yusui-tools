import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'no-console': 'off', // 允许console
      'no-eval': 'off', // 允许eval
      'prefer-regex-literals': 'off', // 允许new RegExp
      'prefer-promise-reject-errors': 'off', // 允许reject空参数和非Error参数
      'unused-imports/no-unused-imports': 'error', // 不允许未使用的导入
      'eslint-comments/no-unlimited-disable': 'off', // 允许忽略规则
      'ts/ban-ts-comment': 'off', // 允许忽略类型检查
      'ts/prefer-ts-expect-error': 'off', // 允许@ts-ignore
      'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }], // 不允许驼峰事件名
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // 类型导入放在顶层
      'import/order': [ // 导入排序
        'error',
        {
          'groups': ['type', 'builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.md/*'],
    rules: {
      'unused-imports/no-unused-imports': 'off', // 允许未使用的导入
    },
  },
)
