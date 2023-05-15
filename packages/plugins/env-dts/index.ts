import type { Plugin } from 'vite'

import fs from 'node:fs'
import path from 'node:path'

export function generateTemplate(env: Record<string, any>) {
  const values = Object.entries(env)
    .map(([key, value]) => `/** ${key}=${value} */\n  ${key}: ${typeof value};`)
    .join('\n  ')
  const template = `interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  ${values}
}
`
  return template
}

interface Options {
  /**
   * 生成d.ts的文件路径
   * @default 'vite-env.d.ts'
   */
  dts?: string
}

const defaultDtsPath = 'vite-env.d.ts'

export function createEnvDts(options?: Options): Plugin {
  return {
    name: 'vite-plugin-env-dts',
    enforce: 'pre',
    apply: 'serve',
    configResolved(config) {
      const { env, root } = config
      const template = generateTemplate(env)
      const dtsPath = path.resolve(root, options?.dts ?? defaultDtsPath)
      try {
        fs.writeFileSync(dtsPath, template)
      }
      catch (err) {
        console.error(err)
      }
    },
  }
}
