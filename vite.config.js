const { createVuePlugin } = require("vite-plugin-vue2");

import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ts from "rollup-plugin-typescript2";

const tsconfig = resolve(__dirname, "tsconfig.json");

export default defineConfig({
  plugins: [
    createVuePlugin(),
    vue(),
    {
      ...ts({
        check: true,
        tsconfig,
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
      }),
      enforce: "pre",
    },
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@import "public/scss/general.scss"; @import "public/scss/variables.scss";`,
      // },
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.js"),
      name: "HComponents",
    },
    rollupOptions: {
      external: ["vue", "@popperjs/core"],
      output: {
        globals: {
          vue: "Vue",
          "@popperjs/core": "core",
        },
      },
    },
  },
});
