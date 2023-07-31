module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    'no-console': 'off', // 允许console.log
    'no-eval': 'off', // 允许eval
    'eqeqeq': 'off', // 允许==
    'vue/eqeqeq': 'off', // 允许==
    'prefer-regex-literals': 'off', // 允许new RegExp
    'prefer-promise-reject-errors': 'off', // 允许reject非Error参数
    '@typescript-eslint/ban-ts-comment': 'off', // 允许ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'off', // 允许ts-expect-error
    '@typescript-eslint/no-use-before-define': 'off', // 允许使用后定义的变量
    'vue/custom-event-name-casing': 'off', // 允许非驼峰事件名
    'vue/v-on-event-hyphenation': 'off', // 允许非驼峰事件名
    'vue/require-explicit-emits': 'off', // 允许emit未定义的事件
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
}
