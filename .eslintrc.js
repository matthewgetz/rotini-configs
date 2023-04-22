module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    'build',
    'dev-build',
    '!src/**/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: [
        '**/*.test.ts',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      },
    ],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-body-style': 'off',
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'arrow-spacing': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'func-style': [
      'error',
      'expression',
    ],
    'global-require': 'off',
    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',
    indent: [
      'error',
      2,
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-console': [
      'warn',
      {
        allow: [
          'debug',
          'info',
          'error',
          'warn',
        ],
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'prefer-arrow-callback': 'error',
    'quote-props': [
      'error',
      'as-needed',
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    semi: [
      'error',
      'always',
    ],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'off',
    'space-unary-ops': 'error',
    'wrap-iife': [
      'error',
      'inside',
    ],
  },
};
