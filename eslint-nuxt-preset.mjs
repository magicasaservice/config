import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export const nuxtPreset = createConfigForNuxt(
  {},
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/attributes-order': 'error',
    },
  },
  { ignores: ['dist', 'node_modules'] },
)
.append(prettierRecommended)
