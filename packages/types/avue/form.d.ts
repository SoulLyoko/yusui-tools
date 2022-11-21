import type { Component, VNode } from "vue";
import type { UploadFile, UploadRawFile, UploadUserFile } from "element-plus";
import type { RuleItem } from "async-validator";

declare module "@smallwei/avue" {
  export interface FormItemRule extends RuleItem {
    trigger?: Arrayable<string>;
  }
  export interface AvueFormColumn<T = any, K = keyof T extends string ? keyof T : string> {
    /** 表单项类型 */
    type?: string;
    /** 字段位置排序，数字越大位置越靠前 */
    order?: number;
    /** 分组折叠 */
    arrow?: boolean;
    /** 分组默认叠起 */
    collapse?: boolean;
    /** 是否单独成行 */
    row?: boolean;
    /** 是否可以清空选项 */
    clearable?: boolean;
    /** 禁止编辑 */
    disabled?: boolean;
    /** 标题名称 */
    label?: string;
    /** 标题名称宽度 */
    labelWidth?: number | string;
    /** 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 labelWidth */
    labelPosition?: Position;
    /** 文字提示 */
    tip?: string;
    /** 文字提示展示方向 */
    tipPlacement?: string;
    /** 标题文字提示 */
    labelTip?: string;
    /** 标题文字提示展示方向 */
    labelTipPlacement?: string;
    /** 辅助语 */
    placeholder?: string;
    /** 列字段(唯一不重复) */
    prop?: K;
    /** 深结构数据绑定取值 */
    bind?: string;
    /** 只读 */
    readonly?: boolean;
    /** 验证规则可以参考<a href="https://github.com/yiminghe/async-validator">async-validator</a> */
    rules?: FormItemRule[];
    /** 控件大小 */
    size?: Size;
    /** 字段控制器 */
    control?: (val: any, form: T) => Record<string, AvueFormColumn<T>>;
    /** 栅列 */
    span?: number;
    /** 项间距 */
    gutter?: number;
    /** 是否可见 */
    display?: boolean;
    /** 参数配置项 */
    props?: DicProps;
    /** 数据类型用于数组和字符串之间的转化 */
    dataType?: string;
    /** 默认值 */
    value?: any;
    /** 字典 */
    dicData?: DicItem[];
    /** 字典远程字典 */
    dicUrl?: string;
    /** 字典的请求方式 */
    dicMethod?: string;
    /** 字典的请求参数 */
    dicQuery?: Record<string, any>;
    /** 子表单 */
    children?: {
      /** 展示类型 */
      type?: "form" | "crud";
      /** 新增方法 */
      rowAdd?: (done: (row: any) => void) => void;
      /** 删除方法 */
      rowDel?: (row: any, done: () => void) => void;
      /** 限制当前最大行数 */
      limit?: number;
    } & AvueCrudOption;
    /** 等同于<component :is=""> */
    component?: string | Component;
    /** 传递给组件的参数 */
    params?: Record<string, any>;
    /** 字典的数据格式化 */
    dicFormatter?: (res: any) => DicItem[];
    /** 点击事件 */
    click?: (args: { column: Array<AvueFormColumn<T>>; row: T; index: number; label: any; value: any }) => void;
    /** 值改变事件 */
    change?: (args: { column: Array<AvueFormColumn<T>>; row: T; index: number; label: any; value: any }) => void;
    /** 聚焦事件 */
    focus?: (args: { column: Array<AvueFormColumn<T>>; row: T; index: number; label: any; value: any }) => void;
    /** 失焦事件 */
    blur?: (args: { column: Array<AvueFormColumn<T>>; row: T; index: number; label: any; value: any }) => void;
    [x: string]: any;
  }

  export interface AvueFormGroup<T = any> {
    /** 左侧图标 */
    icon?: string;
    /** 标题 */
    label?: string;
    /** 是否折叠 */
    collapse?: boolean;
    /** 是否显示右侧箭头 */
    arrow?: boolean;
    /** 分组字段唯一标识 */
    prop?: string;
    /** 是否显示分组 */
    display?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 表单项配置 */
    column?: Array<AvueFormColumn<T>>;
  }

  export interface AvueFormOption<T = any> {
    /** 回车按键触发提交表单 */
    enter?: boolean;
    /** 间隔 */
    gutter?: number;
    /** 弹出表单的标题的统一宽度 */
    labelWidth?: number | string;
    /** 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 labelWidth */
    labelPosition?: Position;
    /** 表单标题名称后缀 */
    labelSuffix?: string;
    /** 表单操作菜单的显影 */
    menuBtn?: boolean;
    /** 表单操作菜单栅格占据的列数 */
    menuSpan?: number;
    /** 表单菜单按钮的排列方式 */
    menuPosition?: Position;
    /** 表格总控件大小 */
    size?: Size;
    /** 重值不清空的字段 */
    clearExclude?: string[];
    /** 提交按钮显隐 */
    submitBtn?: boolean;
    /** 提交按钮文案 */
    submitText?: string;
    /** 清空按钮显隐 */
    emptyBtn?: boolean;
    /** 数据为空文案 */
    emptyText?: string;
    /** 查看模式 */
    detail?: boolean;
    /** 栅列 */
    span?: number;
    /** 选项卡模式 */
    tabs?: boolean;
    /** 表单项配置 */
    column?: Array<AvueFormColumn<T>>;
    /** 表单分组配置 */
    group?: Array<AvueFormGroup<T>>;
  }

  export type FormType = "add" | "edit" | "view";
  export type AvueFormDefaults = Record<string, AvueFormColumn>;
  // export type AvueFormDefaults<T = any, K = T extends object ? keyof T : string> = {
  //   [key in K]?: AvueFormColumn<T>;
  // };

  export interface AvueFormProps<T = any> {
    /** 表单绑定值 v-model */
    modelValue?: T;
    /** 表单总配置属性 */
    option?: AvueFormOption<T>;
    /** 配置项结构 */
    defaults?: AvueFormDefaults;
    /** upload组件上传前的回调,done用于继续图片上传，loading用于中断操作 */
    "upload-before"?: (
      file: UploadRawFile,
      done: (file?: File) => void,
      loading: () => void,
      column: AvueFormColumn<T>
    ) => void;
    /** upload组件上传后的回调,done用于结束操作，loading用于中断操作 */
    "upload-after"?: (res: any, done: () => void, loading: () => void, column: AvueFormColumn<T>) => void;
    /** upload组件删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 */
    "upload-delete"?: (file: UploadFile, column: AvueFormColumn<T>) => boolean | Promise<any> | void;
    /** upload组件查看回调 */
    "upload-preview"?: (file: UploadFile, column: AvueFormColumn<T>, done: () => void) => void;
    /** upload组件上传失败错误回调 */
    "upload-error"?: (error: Error, column: AvueFormColumn<T>) => void;
    /** upload组件上传超过长度限制回调 */
    "upload-exceed"?: (limit: number, files: File[], fileList: UploadUserFile[], column: AvueFormColumn<T>) => void;
    /** 表单提交回调事件 */
    onSubmit?: (form: T, done: () => void) => void;
    /** 表单重置回调事件 */
    onResetChange?: () => void;
    /** 更新表单值 */
    "onUpdate:modelValue"?: (row: T) => any;
    /** 更新配置项结构 */
    "onUpdate:defaults"?: (defaluts: AvueFormDefaults) => any;
  }
  export interface AvueFormMethods {
    /** 对整个表单进行提交 */
    submit: () => void;
    /** 对整个表单进行重置 */
    resetForm: () => void;
    /** 更新字典 */
    updateDic: (props: string) => void;
    /** 获取prop的ref对象 */
    getPropRef: (prop: string) => void;
    /** 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise */
    validate: (callback?: (valid: boolean, done: () => void, msg: string) => void) => Promise<boolean>;
    /** 对部分表单字段进行校验的方法 */
    validateField: (props: string[]) => void;
    /** 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 */
    resetFields: () => void;
    /** 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 */
    clearValidate: () => void;
    /** 重新初始化（多数用于服务端加载或者更新网络字典） */
    init: () => void;
    /** 重新初始化字典 */
    dicInit: () => void;
  }
  export interface AvueFormSlots<T = any> {
    "menu-form": (arg: { disabled: boolean; size: string }) => VNode[];
    [x: string]: (arg: {
      value: any;
      column: AvueFormColumn<T>;
      label: string;
      size: string;
      readonly: boolean;
      disabled: boolean;
      dic: DicItem[];
    }) => VNode[];
  }

  export const AvueForm: new () => {
    $props: AvueFormProps;
    $slots: AvueFormSlots;
  };

  export type AvueFormInstance = InstanceType<typeof AvueForm> & AvueFormMethods;
}
