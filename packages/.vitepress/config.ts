import { defineConfig } from "vitepress";

import { alias } from "../../vite.config";
import pkg from "../../package.json";
import { mdDemoTransform } from "./plugins/md-demo-transform";
import { avuePatch } from "@yusui/plugins";

export default defineConfig({
  base: `/${pkg.name}/`,
  title: pkg.upperName,
  description: pkg.description,
  themeConfig: {
    socialLinks: [{ icon: "github", link: pkg.homepage }],
    nav: [
      { text: "Guide", link: "/guide/start" },
      {
        text: "Packages",
        items: [
          { text: "@yusui/components", link: "/components/index" },
          { text: "@yusui/composables", link: "/composables/index" },
          { text: "@yusui/eslint-config", link: "/eslint-config/index" },
          { text: "@yusui/form-design", link: "/form-design/index" },
          { text: "@yusui/flow-design", link: "/flow-design/index" },
          { text: "@yusui/flow-pages", link: "/flow-pages/index" },
          { text: "@yusui/prettier-config", link: "/prettier-config/index" },
          { text: "@yusui/plugins", link: "/plugins/index" },
          { text: "@yusui/utils", link: "/utils/index" }
        ]
      }
    ],
    sidebar: {
      "/guide": [
        {
          text: "Guide",
          items: [
            { text: "Start", link: "/guide/start" },
            { text: "Changelog", link: "/guide/changelog" }
          ]
        }
      ],
      "/components": [
        {
          text: "Components",
          items: [
            { text: "Start", link: "/components/index" },
            { text: "BasicContainer", link: "/components/basic-container/index" },
            { text: "IconSelect", link: "/components/icon-select/index" },
            { text: "VText", link: "/components/v-text/index" }
          ]
        }
      ],
      "/composables": [
        {
          text: "Composables",
          items: [
            { text: "Start", link: "/composables/index" },
            { text: "useCrud", link: "/composables/use-crud/index" }
          ]
        }
      ],
      "/form-design": [
        {
          text: "FormDesign",
          items: [
            { text: "Start", link: "/form-design/index" },
            { text: "FormDesign", link: "/form-design/src/index" }
          ]
        }
      ],
      "/flow-design": [
        {
          text: "FlowDesign",
          items: [
            { text: "Start", link: "/flow-design/index" },
            { text: "FlowModeler", link: "/flow-design/flow-modeler/index" },
            { text: "FlowViewer", link: "/flow-design/flow-viewer/index" }
          ]
        }
      ],
      "/flow-pages": [
        {
          text: "FlowPages",
          items: [
            { text: "Start", link: "/flow-pages/index" },
            { text: "FormTemplate", link: "/flow-pages/form-template/index" },
            { text: "FlowTemplate", link: "/flow-pages/flow-template/index" },
            { text: "FlowManage", link: "/flow-pages/flow-manage/index" }
          ]
        }
      ],
      "/plugins": [
        {
          text: "Plugins",
          items: [
            { text: "Start", link: "/plugins/index" },
            { text: "avuePatch", link: "/plugins/avue-patch/index" },
            { text: "createEnvDts", link: "/plugins/env-dts/index" },
            { text: "loadProxy", link: "/plugins/load-proxy/index" },
            { text: "uviewPatch", link: "/plugins/uview-patch/index" },
            { text: "uniUIPatch", link: "/plugins/uni-ui-patch/index" }
          ]
        }
      ],
      "/utils": [
        {
          text: "Utils",
          items: [
            { text: "Start", link: "/utils/index" },
            {
              text: "date",
              items: [
                { text: "dateFormat", link: "/utils/date/dateFormat" },
                { text: "durationFormat", link: "/utils/date/durationFormat" }
              ]
            },
            {
              text: "emitter",
              items: [{ text: "mittAsync", link: "/utils/emitter/mittAsync" }]
            },
            {
              text: "file",
              items: [
                { text: "downloadFile", link: "/utils/file/downloadFile" },
                { text: "getFileName", link: "/utils/file/getFileName" }
              ]
            },
            {
              text: "math",
              link: "/utils/math/index"
            },
            {
              text: "object",
              items: [
                { text: "filterObj", link: "/utils/object/filterObj" },
                { text: "getDataType", link: "/utils/object/getDataType" }
              ]
            },
            {
              text: "string",
              items: [
                { text: "serialize", link: "/utils/string/serialize" },
                { text: "deserialize", link: "/utils/string/deserialize" },
                { text: "uuid", link: "/utils/string/uuid" }
              ]
            },
            {
              text: "tool",
              items: [
                { text: "awaitTo", link: "/utils/tool/awaitTo" },
                { text: "sleep", link: "/utils/tool/sleep" }
              ]
            }
          ]
        }
      ]
    }
  },
  vite: {
    plugins: [mdDemoTransform(), avuePatch()],
    resolve: {
      alias
    }
  }
});
