import {  Component } from "vue";

export type HostingerVueComponetsLibraryOptions = {
  global?: boolean;
  components?: object;
  directives?: object;
};

export function install(
  Vue: any,
  args: HostingerVueComponetsLibraryOptions = {}
) {
  if ((install as any).installed) return;
  (install as any).installed = true;

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];

    Vue.directive(name, directive);
  }

  (function registerComponents(components: any) {
    if (components) {
      for (const componentName in components) {
        const component = components[componentName];
        if (component && !registerComponents(component.subcomponents)) {
          Vue.component(componentName, component as Component);
        }
      }
      return true;
    }
    return false;
  })(components);
}

export const createHComponents = (
  options: HostingerVueComponetsLibraryOptions = {}
) => {
  const install = (app: any) => {
    const { components = {}, directives = {} } = options;

    for (const key in directives) {
      const directive = directives[key];

      app.directive(key, directive);
    }

    for (const key in components) {
      const component = components[key];

      app.component(key, component);
    }
  };

  return { install };
};