import type { App } from "vue";
import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import "./index.scss";
import ElementPlus from "element-plus";
// @ts-ignore
import AvueFormDesign from "@sscfaith/avue-form-design";

import components from "../components";
import "element-plus/dist/index.css";
import YSComponents from "../../components/index";
import "../../components/styles/index.scss";
import "@smallwei/avue/lib/index.css";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
    app.use(ElementPlus);
    app.use(YSComponents);
    app.use(AvueFormDesign);
    app.mixin({
      beforeCreate() {
        import("@smallwei/avue").then(module => app.use(module.default));
      }
    });
  }
} as Theme;
