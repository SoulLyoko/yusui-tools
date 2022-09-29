import { config } from "@vue/test-utils";
import ElementPlus from "element-plus";
import { Icon as VIcon } from "@iconify/vue";

const GlobalComponents = {
  install(app) {
    app.use(ElementPlus);
    app.component("VIcon", VIcon);
  }
};

config.global.plugins = [GlobalComponents];
