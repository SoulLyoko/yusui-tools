import type { Resource } from "../types";

import MonacoEditor from "../setters/monaco-editor/index.vue";
import { jsonStringify } from "../utils";

export const upload: Resource = {
  name: "upload",
  title: "上传",
  icon: "el-icon-upload",
  group: "表单组件",
  props: { type: "upload", label: "上传" },
  settings: [
    {
      label: "上传地址",
      prop: "action"
    },
    {
      label: "请求头",
      prop: "headers",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`
    },
    {
      label: "请求方法",
      prop: "method",
      type: "radio",
      button: true,
      dicData: [
        { label: "POST", value: "post" },
        { label: "GET", value: "get" }
      ]
    },
    {
      label: "是否支持多选",
      prop: "multiple",
      type: "switch",
      value: false
    },
    {
      label: "额外参数",
      prop: "data",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`
    },
    {
      label: "显示文件列表",
      prop: "showFileList",
      type: "switch",
      value: true
    },
    {
      label: "拖拽排序",
      prop: "drag",
      type: "switch",
      value: false
    },
    {
      label: "拖拽上传",
      prop: "dragFile",
      type: "switch",
      value: false
    },
    {
      label: "接受上传类型",
      prop: "accept"
    },
    {
      label: "文件列表类型",
      prop: "listType",
      type: "select",
      dicData: [
        { label: "文本", value: "text" },
        { label: "图片", value: "picture" },
        { label: "图片卡片", value: "picture-card" },
        { label: "图片图片", value: "picture-img" }
      ]
    },
    {
      label: "最大上传数量",
      prop: "limit",
      type: "number"
    },
    {
      label: "最大上传大小",
      prop: "fileSize",
      type: "number"
    },
    {
      label: "上传按钮文字",
      prop: "fileText"
    },
    {
      label: "上传等待文字",
      prop: "loadText"
    },
    {
      label: "上传请求配置",
      prop: "propsHttp",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: jsonStringify({
        home: "",
        res: "",
        url: "",
        name: "",
        fileName: "file"
      })
    },
    {
      label: "图片水印配置",
      prop: "canvasOption",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: jsonStringify({
        text: "",
        fontFamily: "microsoft yahei",
        color: "#999",
        fontSize: 16,
        opacity: 100,
        bottom: 10,
        right: 10,
        ratio: 1
      })
    }
  ]
};
