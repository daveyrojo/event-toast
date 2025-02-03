// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import vuePlugin from "eslint-plugin-vue";

export default createConfigForNuxt({
  features: {
    tooling: true,
  },
  dirs: {
    src: ["./playground", "./src"],
  },
}).append({
  plugins: {
    vue: vuePlugin,
  },
  rules: {
    "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "semi": ["error", "always"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never"
      },
    ],
  },
});
