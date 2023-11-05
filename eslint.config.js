const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off', // 允许忽略规则
      'no-console': 'off', // 允许console
      'no-eval': 'off', // 允许eval
      'prefer-regex-literals': 'off', // 允许new RegExp
      'prefer-promise-reject-errors': 'off', // 允许reject空参数和非Error参数
      'ts/ban-ts-comment': 'off', // 允许忽略类型检查
      'ts/no-use-before-define': 'off', // 允许使用后定义的变量
      'ts/prefer-ts-expect-error': 'off', // 允许@ts-ignore
      'vue/custom-event-name-casing': 'off', // 允许非驼峰事件名
      'vue/v-on-event-hyphenation': 'off', // 允许非驼峰事件名
      'vue/require-explicit-emits': 'off', // 允许emit未定义的事件
      'unused-imports/no-unused-vars': 'off', // 允许未使用的变量
      'unused-imports/no-unused-imports': 'error', // 不允许未使用的导入
      'import/no-self-import': 'off', // 允许导入自身
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
