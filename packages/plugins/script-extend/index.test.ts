import { transformScriptExtend } from '.'

describe('transformScriptExtend', () => {
  it('should not be transformed if not a setup script', () => {
    const code = `<script lang="ts" name="component-name" inheritAttrs>
console.log('hello')
</script>`
    expect(transformScriptExtend(code, '/test.vue')).toBeNull()
  })

  it('should transformed to defineComponent attrs', () => {
    const code = `<script setup lang="ts" name="ComponentName" inheritAttrs>
console.log('hello')
</script>`
    const result = transformScriptExtend(code, '/test.vue')?.code
    expect(result).toMatchInlineSnapshot(`
      "<script lang=\\"ts\\">
      import { defineComponent } from 'vue'
      export default defineComponent({
        name: 'ComponentName',
        inheritAttrs: true,
      })
      </script>
      <script setup lang=\\"ts\\" name=\\"ComponentName\\" inheritAttrs>
      console.log('hello')
      </script>"
    `)
  })
})
