import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['node_modules', 'dist'] },
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    }
  },
  prettier
]
