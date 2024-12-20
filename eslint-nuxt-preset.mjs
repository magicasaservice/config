import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export const nuxtPreset = createConfigForNuxt(
  {},
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  { ignores: ['dist', 'node_modules'] },
  ...tseslint.configs.recommended,
  prettierRecommended
)
