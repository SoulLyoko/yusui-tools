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
          { text: "@yusui/plugins", link: "/plugins/index" }
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
            { text: "loadProxy", link: "/plugins/load-proxy/index" },
            { text: "uviewPatch", link: "/plugins/uview-patch/index" }
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
