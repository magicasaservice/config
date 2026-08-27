import pluginPerfectionist from 'eslint-plugin-perfectionist'
import pluginImportX from 'eslint-plugin-import-x'

// The whole rule: external js, internal js, external types, internal types.
// Statement order within a group and blank lines are left alone. Inline type
// specifiers are lifted to top level so types cannot hide in the js groups.
export const importOrder = {
  plugins: {
    perfectionist: pluginPerfectionist,
    'import-x': pluginImportX,
  },
  rules: {
    'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'unsorted',
        newlinesBetween: 'ignore',
        internalPattern: ['^~', '^@/', '^#'],
        groups: [
          ['value-builtin', 'value-external'],
          ['value-internal', 'value-parent', 'value-sibling', 'value-index'],
          ['type-builtin', 'type-external'],
          ['type-internal', 'type-parent', 'type-sibling', 'type-index'],
        ],
      },
    ],
  },
}
