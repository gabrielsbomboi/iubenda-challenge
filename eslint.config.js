// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser
    },
    plugins: {
      js,
      vue: pluginVue
    },
    extends: [
      js.configs.recommended,
      pluginVue.configs["flat/recommended"]
    ],
    rules: {
      // custom rules,
    }
  }
])
