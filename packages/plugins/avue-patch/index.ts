import type { Plugin } from 'vite'

/**
 * avue-crud 菜单按钮颜色
 * [column-menu](https://github.com/nmxiaowei/avue/blob/3.x/packages/element-ui/crud/column/column-menu.vue#L62)
*/
export function fixBtnType(code: string) {
  return (
    code
      // prod
      .replace(
        'type:e.menuText("primary"),class:Object(a.normalizeClass)(e.b("cancelBtn"))',
        'type:e.menuText("danger"),class:Object(a.normalizeClass)(e.b("cancelBtn"))',
      )
      .replace(
        'type:e.menuText("primary"),class:Object(a.normalizeClass)(e.b("viewBtn"))',
        'type:e.menuText("default"),class:Object(a.normalizeClass)(e.b("viewBtn"))',
      )
      .replace(
        'type:e.menuText("primary"),class:Object(a.normalizeClass)(e.b("delBtn"))',
        'type:e.menuText("danger"),class:Object(a.normalizeClass)(e.b("delBtn"))',
      )
      // dev
      .replace(
        'type: e2.menuText("primary"), class: Object(a.normalizeClass)(e2.b("cancelBtn"))',
        'type: e2.menuText("danger"), class: Object(a.normalizeClass)(e2.b("cancelBtn"))',
      )
      .replace(
        'type: e2.menuText("primary"), class: Object(a.normalizeClass)(e2.b("viewBtn"))',
        'type: e2.menuText("default"), class: Object(a.normalizeClass)(e2.b("viewBtn"))',
      )
      .replace(
        'type: e2.menuText("primary"), class: Object(a.normalizeClass)(e2.b("delBtn"))',
        'type: e2.menuText("danger"), class: Object(a.normalizeClass)(e2.b("delBtn"))',
      )
  )
}

/**
 * avue-form 给表单项传递表单数据
 * [form](https://github.com/nmxiaowei/avue/blob/3.x/packages/element-ui/form/index.vue#L126)
  */
export function fixFormRow(code: string) {
  return (
    code
      // prod
      .replace('modelValue:e.form[t.prop]', 'modelValue:e.form[t.prop],tableData:{row:e.form}')
      // dev
      .replace('modelValue: e2.form[t3.prop]', 'modelValue: e2.form[t3.prop], tableData: { row: e2.form }')
  )
}

export function avuePatch(): Plugin {
  return {
    name: 'vite-plugin-avue-patch',
    enforce: 'pre',
    transform(code, id) {
      if (/avue.js|avue.min.js/.test(id)) {
        code = fixBtnType(code)
        code = fixFormRow(code)
        return code
      }
    },
  }
}
