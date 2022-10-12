import type { App } from "vue-demi";

export default {
  install: (app: App) => {
    const components = import.meta.globEager("./**/*.vue");
    Object.values(components).forEach((module: any) => {
      const component = module.default;
      app.component(component.name, component);
    });
  }
};
