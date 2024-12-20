import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export const typescriptPreset = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  { ignores: ['node_modules'] },
]
