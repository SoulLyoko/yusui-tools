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
      }
    ]
  },
  {
    label: "表单组件",
    children: [
      {
        type: "input",
        label: "输入框",
        icon: "el-icon-chat-dot-square"
      },
      {
        type: "textarea",
        label: "文本域",
        icon: "el-icon-chat-line-square"
      },
      {
        type: "password",
        label: "密码输入",
        icon: "el-icon-lock"
      },
      {
        type: "number",
        label: "数字输入",
        icon: "el-icon-more"
      },
      {
        type: "radio",
        label: "单选框组",
        icon: "el-icon-circle-check",
        dicOption: "static",
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
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
        dicOption: "static",
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      {
        type: "switch",
        label: "开关",
        icon: "el-icon-open",
        value: "0",
        dicData: [
          { label: "", value: "0" },
          { label: "", value: "1" }
        ]
      },
      {
        type: "select",
        label: "下拉选择器",
        icon: "el-icon-arrow-down",
        dicOption: "static",
        cascader: [],
        dicData: [
          { label: "选项一", value: "0" },
          { label: "选项二", value: "1" },
          { label: "选项三", value: "2" }
        ],
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
        cascaderIndex: 1,
        cascader: [],
        showAllLevels: true,
        dicOption: "static",
        separator: "/",
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
        props: {
          label: "label",
          value: "value",
          desc: "desc",
          res: "res"
        }
      },
      // {
      //   type: "year",
      //   label: "年",
      //   icon: "el-icon-calendar",
      //   format: "YYYY",
      //   valueFormat: "YYYY"
      // },
      // {
      //   type: "month",
      //   label: "月",
      //   icon: "el-icon-calendar",
      //   format: "MM",
      //   valueFormat: "MM"
      // },
      // {
      //   type: "week",
      //   label: "周",
      //   icon: "el-icon-calendar",
      //   format: "YYYY 第 ww 周"
      // },
      {
        type: "date",
        label: "日期",
        icon: "el-icon-calendar",
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD"
      },
      {
        type: "daterange",
        label: "日期范围",
        icon: "el-icon-calendar",
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD"
      },
      {
        type: "time",
        label: "时间",
        icon: "el-icon-clock",
        format: "HH:mm:ss",
        valueFormat: "HH:mm:ss"
      },
      {
        type: "timerange",
        label: "时间范围",
        icon: "el-icon-clock",
        format: "HH:mm:ss",
        valueFormat: "HH:mm:ss"
      },
      {
        type: "datetime",
        label: "日期时间",
        icon: "el-icon-clock",
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
      },
      {
        type: "datetimerange",
        label: "日期时间范围",
        icon: "el-icon-clock",
        format: "YYYY-MM-DD HH:mm:ss",
        valueFormat: "YYYY-MM-DD HH:mm:ss"
      },
      {
        type: "upload",
        label: "上传",
        icon: "el-icon-upload",
        showFileList: true,
        multiple: true,
        limit: 10,
        // props: {},
        propsHttp: {},
        headersConfig: [],
        dataConfig: []
      },
      {
        type: "rate",
        label: "评价",
        icon: "el-icon-star",
        max: 5,
        value: 0
      },
      {
        type: "slider",
        label: "滑块",
        icon: "el-icon-operation",
        min: 0,
        max: 10
      }
    ]
  },
  {
    label: "其它组件",
    children: [
      {
        label: "标题",
        type: "title",
        icon: "el-icon-minus",
        value: "标题"
      },
      {
        type: "tree",
        label: "树形选择器",
        icon: "el-icon-files",
        parent: true,
        cascader: [],
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
        children: {
          border: true,
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
      },
      {
        type: "url",
        label: "超链接",
        icon: "el-icon-link"
      },
      {
        type: "array",
        label: "数组",
        icon: "el-icon-full-screen"
      },
      {
        type: "img",
        label: "图片",
        icon: "el-icon-picture"
      },
      {
        type: "map",
        label: "地图选择器",
        icon: "el-icon-position"
      },
      {
        type: "icon",
        label: "图标选择器",
        component: "avue-input-icon",
        icon: "el-icon-eleme",
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
            }
          ]
        }
      },
      {
        type: "color",
        label: "颜色选择器",
        icon: "el-icon-brush"
      }
    ]
  }
];
