import type { Plugin } from 'vite'

import path from 'node:path'

const MATCHER = /:::\s*demo\s*(.*)\s*:::/
function useMatcher(flags?: string) {
  return new RegExp(MATCHER, flags)
}

function parseComponent(match: string, id: string) {
  const [_m, componentPath] = match.match(useMatcher()) ?? []
  const componentName = `demo${path.basename(componentPath)}`
  const sourcePath = path.join(id.substring(0, id.lastIndexOf('/')), componentPath)
  return { componentPath, componentName, sourcePath }
}

/**
 * Use in `.md`:
 *```md
 * ::: demo
 * ./basic
 * :::
 * ```
 * Will be transformed to:
 * ```html
 * <script setup>
 * import xxx from "./demo.vue";
 * </script>
 * <demo>
 *   <template #demo>
 *     <xxx></xxx>
 *   </template>
 *   <template #code>
 *
 * <<< x:\\xxx\xxx\xxx.vue
 *
 *   </template>
 * </demo>
 * ```
 */
export function mdDemoTransform(): Plugin {
  return {
    name: 'md-demo-transform',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md'))
        return

      const demoMatches = code.match(useMatcher('g'))
      if (!demoMatches)
        return
      const importComponents = demoMatches
        .map((match) => {
          const { componentPath, componentName } = parseComponent(match, id)
          const script = `import ${componentName} from "${componentPath}.vue";`
          return script
        })
        .join('\n')
      const importSript = `<script setup>\n${importComponents}\n</script>\n`
      demoMatches?.forEach((match) => {
        const { componentName, sourcePath } = parseComponent(match, id)
        //         const demoTemplate = `<${componentName}></${componentName}>

        // :::details View Source
        // <<< ${sourcePath}.vue
        // :::`;
        const demoTemplate = `
<demo>
  <template #demo>
    <${componentName}></${componentName}>
  </template>
  <template #code>
\n<<< ${sourcePath}.vue\n
  </template>
</demo>`
        code = code.replace(match, importSript + demoTemplate)
      })

      return code
    },
  }
}
