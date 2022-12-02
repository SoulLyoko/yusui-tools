import { defineConfig } from "vitepress";

import { alias } from "../../vite.config";
import pkg from "../../package.json";

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
              items: [{ text: "mittASync", link: "/utils/emitter/mittASync" }]
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
    resolve: {
      alias
    }
  }
});
