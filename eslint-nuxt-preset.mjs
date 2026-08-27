import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { importOrder } from './eslint-import-order.mjs'

const nuxtConfig = await createConfigForNuxt(
  {},
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/attributes-order': 'error',
      'vue/require-default-prop': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: "CallExpression[callee.name='withDefaults']",
          message:
            'Do not use withDefaults — destructure instead, e.g. const { foo = 1 } = defineProps<Props>().',
        },
      ],
    },
  }
)

export const nuxtPreset = [
  ...nuxtConfig,
  prettierRecommended,
  { rules: { curly: 'error' } },
  importOrder,
  { ignores: ['dist', 'node_modules'] },
]
