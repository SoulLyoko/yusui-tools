import type { App } from "vue";
import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "@smallwei/avue/lib/index.css";

import components from "../components";
import YSComponents from "../../components/index";
import "../../components/styles/index.scss";
import "../../flow-design/styles/index.scss";
import "../../form-design/styles/index.scss";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
    app.use(ElementPlus, { locale: zhCn });
    app.use(YSComponents);
    app.mixin({
      async beforeCreate() {
        await import("@smallwei/avue").then(module => app.use(module.default, { appendToBody: true }));
        await import("@yusui/flow-design").then(module => app.component("FlowViewer", module.FlowViewer));
        await import("@yusui/flow-design").then(module => app.component("FlowModeler", module.FlowModeler));
        await import("@yusui/form-design").then(module => app.component("FormDesign", module.FormDesign));
        await import("@yusui/flow-pages").then(module => app.component("FlowTemplate", module.FlowTemplate));
        await import("@yusui/flow-pages").then(module => app.component("FormTemplate", module.FormTemplate));
        await import("@yusui/flow-pages").then(module => app.component("FlowManage", module.FlowManage));
      }
    });
  }
} as Theme;
