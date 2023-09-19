import fs from 'fs-extra'

function patchAntfuEslintConfig() {
  // 去除忽略*.d.ts文件
  const filePath = 'node_modules/@antfu/eslint-config-basic/index.js'
  const file = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const rewriteFile = file.replace('\'*.d.ts\',', '//\'*.d.ts\',')
  fs.writeFileSync(filePath, rewriteFile, { encoding: 'utf-8' })
}

patchAntfuEslintConfig()
