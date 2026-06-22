import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export const vuePreset = defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      '@typescript-eslint/no-duplicate-enum-values': 'off',
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
      curly: 'error',
    },
  }
)
