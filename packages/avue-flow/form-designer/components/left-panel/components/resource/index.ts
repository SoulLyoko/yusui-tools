import type { ResourceElement } from "../../../../types";

export const defaultResourceList: { label: string; children: ResourceElement[] }[] = [
  {
    label: "布局组件",
    children: [
      {
        label: "分组",
        type: "group",
        icon: "el-icon-menu",
        column: []
      },
      {
        label: "子表单",
        type: "dynamic",
        icon: "el-icon-grid",
        children: {
          column: []
        }
      },
      {
        label: "标题",
        type: "title",
        icon: "el-icon-minus",
        value: "标题",
        styles: {
          fontSize: "18px",
          color: "#000"
        }
      }
    ]
  },
  {
    label: "输入字段",
    children: [
      {
        type: "input",
        label: "单行文本",
        icon: "el-icon-chat-dot-square",
        span: 24,
        display: true
      },
      {
        type: "password",
        label: "密码",
        icon: "el-icon-lock",
        span: 24,
        display: true
      },
      {
        type: "textarea",
        label: "多行文本",
        icon: "el-icon-chat-line-square",
        span: 24,
        display: true
      },
      {
        type: "number",
        label: "计数器",
        icon: "el-icon-more",
        controls: true,
        span: 24,
        display: true
      },
      {
        type: "url",
        label: "超链接",
        icon: "el-icon-link",
        span: 24,
        display: true
      },
      {
        type: "array",
        label: "数组",
        icon: "el-icon-full-screen",
        span: 24,
        display: true
      },
      {
        type: "img",
        label: "图片",
        icon: "el-icon-picture",
        span: 24,
        display: true
      },
      {
        type: "map",
        label: "地图选择器",
        icon: "el-icon-position",
        span: 24,
        display: true
      }
    ]
  },
  {
    label: "选择字段",
    children: [
      {
        type: "radio",
        label: "单选框组",
        icon: "el-icon-circle-check",
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        span: 24,
        display: true,
        dicOption: "static",
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "checkbox",
        label: "多选框组",
        icon: "el-icon-folder-checked",
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        span: 24,
        display: true,
        dicOption: "static",
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "select",
        label: "下拉选择器",
        icon: "el-icon-arrow-down",
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        // 用于做级联配置
        cascader: [],
        span: 24,
        display: true,
        dicOption: "static",
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "cascader",
        label: "级联选择器",
        icon: "el-icon-connection",
        span: 24,
        display: true,
        dicData: [
          {
            label: "选项一",
            value: "0",
            children: [
              {
                label: "选项1-1",
                value: "11"
              },
              {
                label: "选项1-2",
                value: "12"
              }
            ]
          },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        cascaderIndex: 1,
        // 用于做级联配置
        cascader: [],
        showAllLevels: true,
        dicOption: "static",
        separator: "/",
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "tree",
        label: "树形选择器",
        icon: "el-icon-files",
        span: 24,
        display: true,
        dicOption: "static",
        dicData: [
          {
            label: "选项一",
            value: "0",
            children: [
              {
                label: "选项1-1",
                value: "11"
              },
              {
                label: "选项1-2",
                value: "12"
              }
            ]
          },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        parent: true,
        // 用于做级联配置
        cascader: [],
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "table",
        label: "表格选择器",
        icon: "el-icon-grid",
        display: true,
        span: 24,
        children: {
          border: true,
          searchMenuSpan: 6,
          searchIcon: true,
          column: []
          // props: {
          //   url: "",
          //   method: "get",
          //   rowKey: "id",
          //   needPage: true,
          //   currentPageKey: "current",
          //   pageSizeKey: "size",
          //   totalKey: "total",
          //   recordsKey: "records",
          //   resKey: "data.data",
          //   auto: true
          // }
        },
        formatter(row: any) {
          return row.name;
        },
        props: {
          label: "name",
          value: "id"
        }
      }
    ]
  },
  // {
  //   label:"上传字段",
  //   children: [
  //     {
  //       type: "upload",
  //       label: "上传",
  //       icon: "el-icon-upload",
  //       span: 24,
  //       display: true,
  //       showFileList: true,
  //       multiple: true,
  //       limit: 10,
  //       // props: {},
  //       propsHttp: {},
  //       headersConfig: [],
  //       dataConfig: []
  //     }
  //   ]
  // },
  {
    label: "日期时间字段",
    children: [
      {
        type: "year",
        label: "年",
        icon: "el-icon-calendar",
        span: 24,
        display: true,
        format: "YYYY",
        valueFormat: "YYYY"
      },
      {
        type: "month",
        label: "月",
        icon: "el-icon-calendar",
        span: 24,
        display: true,
        format: "MM",
        valueFormat: "MM"
      },
      {
        type: "week",
        label: "周",
        icon: "el-icon-calendar",
        span: 24,
        display: true,
        format: "YYYY 第 ww 周"
      },
      {
        type: "date",
        label: "日期",
        icon: "el-icon-calendar",
        span: 24,
        display: true,
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD"
      },
      {
        type: "time",
        label: "时间",
        icon: "el-icon-clock",
        span: 24,
        display: true,
        format: "HH:mm:ss",
        valueFormat: "HH:mm:ss"
      },
      {
        type: "datetime",
        label: "日期时间",
        icon: "el-icon-clock",
        span: 24,
        display: true,
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
      },
      {
        type: "daterange",
        label: "日期范围",
        icon: "el-icon-calendar",
        span: 24,
        display: true,
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD"
      },
      {
        type: "timerange",
        label: "时间范围",
        icon: "el-icon-clock",
        span: 24,
        display: true,
        format: "HH:mm:ss",
        valueFormat: "HH:mm:ss"
      },
      {
        type: "datetimerange",
        label: "日期时间范围",
        icon: "el-icon-clock",
        span: 24,
        display: true,
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
      }
    ]
  },
  // {
  //   label:"插件字段（需单独引入依赖）",
  //   children: [
  //     {
  //       type: "ueditor",
  //       component: "avue-ueditor",
  //       label: "富文本",
  //       icon: "el-icon-tickets",
  //       span: 24,
  //       display: true,
  //       options: {
  //         action: "",
  //         oss: "",
  //         props: {},
  //         ali: {},
  //         qiniu: {}
  //       }
  //     }
  //   ]
  // },
  {
    label: "其他字段",
    children: [
      {
        type: "upload",
        label: "上传",
        icon: "el-icon-upload",
        span: 24,
        display: true,
        showFileList: true,
        multiple: true,
        limit: 10,
        // props: {},
        propsHttp: {},
        headersConfig: [],
        dataConfig: []
      },
      {
        type: "icon",
        label: "图标",
        component: "avue-input-icon",
        icon: "el-icon-eleme",
        span: 24,
        display: true,
        params: {
          iconList: [
            {
              label: "基本图标",
              children: [
                "el-icon-info",
                "el-icon-error",
                "el-icon-error",
                "el-icon-success",
                "el-icon-warning",
                "el-icon-question"
              ]
            },
            {
              label: "方向图标",
              children: [
                "el-icon-info",
                "el-icon-back",
                "el-icon-arrow-left",
                "el-icon-arrow-down",
                "el-icon-arrow-right",
                "el-icon-arrow-up"
              ]
            },
            {
              label: "符号图标",
              children: ["el-icon-plus", "el-icon-minus", "el-icon-close", "el-icon-check"]
            }
          ]
        }
      },
      {
        type: "switch",
        label: "开关",
        icon: "el-icon-open",
        span: 24,
        display: true,
        value: "0",
        dicData: [
          { label: "", value: "0" },
          { label: "", value: "1" }
        ]
      },
      {
        type: "rate",
        label: "评价",
        icon: "el-icon-star",
        span: 24,
        display: true,
        max: 5,
        value: 0,
        texts: ["极差", "失望", "一般", "满意", "惊喜"],
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
      },
      {
        type: "slider",
        label: "滑块",
        icon: "el-icon-operation",
        span: 24,
        display: true,
        min: 0,
        max: 10
      },
      {
        type: "color",
        label: "颜色选择器",
        icon: "el-icon-brush",
        span: 24,
        display: true
      }
    ]
  }
];
