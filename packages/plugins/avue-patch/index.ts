import type { Plugin } from 'vite'

// avue-dynamic 新增时触发更新
export function fixAddRow(code: string) {
  return (
    code
      // prod
      .replace(
        'addRow:function(){var e=this,t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign(e.valueOption,t,{$index:e.textLen}),e.isCrud?e.$refs.main.rowCellAdd(t):e.isForm&&e.text.push(t)};"function"==typeof this.rowAdd?this.rowAdd(t):t()}',
        'addRow:function(){var e=this,t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign(e.valueOption,t,{$index:e.textLen});e.isCrud?e.$refs.main.rowCellAdd(t):e.isForm&&e.text.push(t);e.text = e.deepClone(e.text)};"function"==typeof this.rowAdd?this.rowAdd(t):t()}',
      )
      // dev
      .replace(
        `addRow: function() {
          var e2 = this, t2 = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t3 = Object.assign(e2.valueOption, t3, { $index: e2.textLen }), e2.isCrud ? e2.$refs.main.rowCellAdd(t3) : e2.isForm && e2.text.push(t3);
          };
          "function" == typeof this.rowAdd ? this.rowAdd(t2) : t2();
        }`,
        `addRow: function() {
          var e2 = this, t2 = function() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t3 = Object.assign(e2.valueOption, t3, { $index: e2.textLen }), e2.isCrud ? e2.$refs.main.rowCellAdd(t3) : e2.isForm && e2.text.push(t3);
            e2.text = e2.deepClone(e2.text);
          };
          "function" == typeof this.rowAdd ? this.rowAdd(t2) : t2();
        }`,
      )
  )
}

// avue-crud 菜单按钮颜色
export function fixBtnType(code: string) {
  return (
    code
      // prod
      .replace(
        'type:e.menuText("primary"),text:e.isTextMenu,icon:e.crud.getBtnIcon("cancelBtn")',
        'type:e.menuText("danger"),text:e.isTextMenu,icon:e.crud.getBtnIcon("cancelBtn")',
      )
      .replace(
        'type:e.menuText("primary"),text:e.isTextMenu,icon:e.crud.getBtnIcon("viewBtn")',
        'type:e.menuText("success"),text:e.isTextMenu,icon:e.crud.getBtnIcon("viewBtn")',
      )
      .replace(
        'type:e.menuText("primary"),text:e.isTextMenu,icon:e.crud.getBtnIcon("delBtn")',
        'type:e.menuText("danger"),text:e.isTextMenu,icon:e.crud.getBtnIcon("delBtn")',
      )
      // dev
      .replace(
        'type: e2.menuText("primary"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("cancelBtn")',
        'type: e2.menuText("danger"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("cancelBtn")',
      )
      .replace(
        'type: e2.menuText("primary"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("viewBtn")',
        'type: e2.menuText("success"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("viewBtn")',
      )
      .replace(
        'type: e2.menuText("primary"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("delBtn")',
        'type: e2.menuText("danger"), text: e2.isTextMenu, icon: e2.crud.getBtnIcon("delBtn")',
      )
  )
}

export function fixFormGroup(code: string) {
  return (
    code
      // prod
      .replace('n=this.tableOption.group', 'n=this.deepClone(this.tableOption.group)')
      // dev
      .replace('n = this.tableOption.group', 'n = this.deepClone(this.tableOption.group)')
  )
}

// avue-form 给表单项传表单数据
export function fixFormRow(code: string) {
  return (
    code
      // prod
      .replace('modelValue:e.form[t.prop]', 'modelValue:e.form[t.prop],tableData:{row:e.form}')
      // dev
      .replace('modelValue: e2.form[t3.prop]', 'modelValue: e2.form[t3.prop], tableData: { row: e2.form }')
  )
}

// 修复 dic getResData
export function fixDicGetResData(code: string) {
  return (
    code
      // prod
      .replace('var o,l=t.bind||"";', 'var o=e,l=t.bind||t.res||"";')
      // dev
      .replace('var o3, l3 = t4.bind || "";', 'var o3 = e4, l3 = t4.bind || t4.res || "";')
  )
}

export function avuePatch(): Plugin {
  return {
    name: 'vite-plugin-avue-patch',
    enforce: 'pre',
    transform(code, id) {
      if (/avue.js|avue.min.js/.test(id)) {
        code = fixBtnType(code)
        code = fixAddRow(code)
        // code = fixFormGroup(code);
        code = fixFormRow(code)
        code = fixDicGetResData(code)
        return code
      }
    },
  }
}
