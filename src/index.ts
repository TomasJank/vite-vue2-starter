import * as components from "./components";

export * from "./components";

import {
  createHComponents,
  HostingerVueComponetsLibraryOptions
} from "./install";

export const createHostingerVue = (
  options: HostingerVueComponetsLibraryOptions = {}
) => createHComponents({ components, ...options });