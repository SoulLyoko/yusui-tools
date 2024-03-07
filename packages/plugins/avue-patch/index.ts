import type { Plugin } from 'vite'

/**
 * avue-crud 菜单按钮颜色
 * [column-menu](https://github.com/nmxiaowei/avue/blob/master/packages/element-ui/crud/column/column-menu.vue#L62)
 */
export function fixMenuBtnType(code: string) {
  const devMatchReg = (btn: string) => new RegExp(`primary('\\),\\\\n\\s*class: Object\\(vue__WEBPACK_IMPORTED_MODULE_0__\\[\\\\"normalizeClass\\\\"\\]\\)\\(_ctx.b\\('${btn}'\\)\\))`)
  return (
    code
      // prod
      .replace(
        'type:e.menuText("primary"),class:Object(l.normalizeClass)(e.b("cancelBtn"))',
        'type:e.menuText("danger"),class:Object(l.normalizeClass)(e.b("cancelBtn"))',
      )
      .replace(
        'type:e.menuText("primary"),class:Object(l.normalizeClass)(e.b("viewBtn"))',
        'type:e.menuText("default"),class:Object(l.normalizeClass)(e.b("viewBtn"))',
      )
      .replace(
        'type:e.menuText("primary"),class:Object(l.normalizeClass)(e.b("delBtn"))',
        'type:e.menuText("danger"),class:Object(l.normalizeClass)(e.b("delBtn"))',
      )
      // dev
      .replace(devMatchReg('cancelBtn'), 'danger$1')
      .replace(devMatchReg('viewBtn'), 'default$1')
      .replace(devMatchReg('delBtn'), 'danger$1')
  )
}

/**
 * avue-form 给表单项传递表单数据
 * [form](https://github.com/nmxiaowei/avue/blob/master/packages/element-ui/form/index.vue#L142)
 */
export function fixFormRow(code: string) {
  return (
    code
      // prod
      .replace('modelValue:e.form[t.prop]', 'modelValue:e.form[t.prop],tableData:{row:e.form}')
      // dev
      .replace('modelValue: _ctx.form[column.prop]', 'modelValue: _ctx.form[column.prop], tableData: { row: _ctx.form }')
  )
}

/**
 * avue-crud 菜单按钮插槽
 * [column-menu](https://github.com/nmxiaowei/avue/blob/master/packages/element-ui/crud/column/column-menu.vue#L52)
 */
export function fixMenuBtnSlot(code: string) {
  return (
    code
      // prod
      .replace('e.$slots,"menuBtn"', 'e.$slots,"menu-btn"')
      // dev
      .replace('_ctx.$slots, \\"menuBtn\\"', '_ctx.$slots, \\"menu-btn\\"')
  )
}

/**
 * 表单分组
 * [form](https://github.com/nmxiaowei/avue/blob/master/packages/element-ui/form/index.vue#L326)
 * @deprecated v3.2.21已修复
 */
export function fixFormGroup(code: string) {
  return (
    code
      // prod
      .replace('o=t.group||[],l=t.footer||[];', 'o=this.deepClone(t.group||[]),l=this.deepClone(t.footer||[]);')
      // dev
      .replace('o2 = t2.group || [], l2 = t2.footer || [];', 'o2 = [].concat(t2.group || []), l2 = [].concat(t2.footer || []);')
  )
}

export function avuePatch(): Plugin {
  return {
    name: 'vite-plugin-avue-patch',
    enforce: 'pre',
    transform(code, id) {
      if (/avue.js|avue.min.js/.test(id)) {
        code = fixMenuBtnType(code)
        code = fixFormRow(code)
        code = fixMenuBtnSlot(code)
        return code
      }
    },
  }
}
