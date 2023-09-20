import fs from 'fs-extra'

function patchAntfuEslintConfig() {
  // v0.40.3 去除忽略*.d.ts文件
  const filePath = 'node_modules/@antfu/eslint-config-basic/index.js'
  const file = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const rewriteFile = file.replace('\'*.d.ts\',', '//\'*.d.ts\',')
  fs.writeFileSync(filePath, rewriteFile, { encoding: 'utf-8' })

  // // v0.43.0 去除忽略jsdoc规则
  // const filePath = 'node_modules/@antfu/eslint-config-basic/index.js'
  // const file = fs.readFileSync(filePath, { encoding: 'utf-8' })
  // const rewriteFile = file.replace('\'plugin:jsdoc/recommended\',', '//\'plugin:jsdoc/recommended\',')
  // fs.writeFileSync(filePath, rewriteFile, { encoding: 'utf-8' })
}

patchAntfuEslintConfig()
