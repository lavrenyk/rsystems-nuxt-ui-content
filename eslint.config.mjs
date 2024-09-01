// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    extends: [
      'prettier'
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    },
    // @ts-ignore
    plugins: ['prettier']
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    }
  }
])
