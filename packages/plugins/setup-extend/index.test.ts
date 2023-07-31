import { transformSetupExtend } from '.'

describe('transformSetupExtend', () => {
  it('should not be transformed when only has a normal script', () => {
    const code = `<script lang="ts" name="ComponentName">
console.log('hello')
</script>`
    expect(transformSetupExtend(code, '/test.vue')).toBeNull()
  })

  it('should not be transformed when already has a normal script', () => {
    const code = `<script lang="ts">
export default { name: 'ComponentName' }
</script>
<script setup lang="ts">
console.log('hello')
</script>`
    expect(transformSetupExtend(code, '/test.vue')).toBeNull()
  })

  it('should transformed to defineComponent attrs', () => {
    const code = `<script setup lang="ts" name="ComponentName" generic="T" inheritAttrs>
console.log('hello')
</script>`
    const result = transformSetupExtend(code, '/test.vue')?.code
    expect(result).toMatchInlineSnapshot(`
      "<script lang=\\"ts\\">
      import { defineComponent } from 'vue'
      export default defineComponent({
        name: 'ComponentName',
        inheritAttrs: true,
      })
      </script>
      <script setup lang=\\"ts\\" name=\\"ComponentName\\" generic=\\"T\\" inheritAttrs>
      console.log('hello')
      </script>"
    `)
  })

  it('inheritAttrs="false"', () => {
    const code = `<script setup lang="ts" inheritAttrs="false">
console.log('hello')
</script>`
    const result = transformSetupExtend(code, '/test.vue')?.code
    expect(result).toMatchInlineSnapshot(`
      "<script lang=\\"ts\\">
      import { defineComponent } from 'vue'
      export default defineComponent({
        
        inheritAttrs: false,
      })
      </script>
      <script setup lang=\\"ts\\" inheritAttrs=\\"false\\">
      console.log('hello')
      </script>"
    `)
  })
})
