module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    'no-console': 'off', // 允许console.log
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
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
