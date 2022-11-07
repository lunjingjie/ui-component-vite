/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

// 构建选项
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      // 全局模块
      vue: "vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    // 编译的时候是否要独立输出 css
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
