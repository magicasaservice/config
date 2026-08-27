import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { importOrder } from './eslint-import-order.mjs'

export const typescriptPreset = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  { rules: { curly: 'error' } },
  importOrder,
  { ignores: ['dist', 'node_modules'] },
]
