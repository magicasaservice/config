import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export const vuePreset = defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs,
  {
    rules: {
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/attributes-order': 'error',
      'vue/require-default-prop': 'off',
    },
  }
)
