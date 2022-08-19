module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'space-before-function-paren': 'off',
    typeof: false, // 语法检查关闭

    'eslint.enable': true,
    'eslint.run': 'onType',
    'eslint.options': {
      extensions: ['.js', '.vue', '.jsx', '.tsx']
    },
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': true
    }
  }
};
