import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['dist'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            'comma-dangle': ['error', 'always-multiline'],
            'no-console':  'error',
            'no-debugger': 'error',
            'no-unused-vars': ['error', {
                'ignoreRestSiblings': true,
                'varsIgnorePattern': '_+',
                'argsIgnorePattern': '^_',
            }],
            'consistent-return': [0, { 'treatUndefinedAsUnspecified': true }],
            'object-curly-spacing': ['error', 'always'],
            'no-empty': ['error', { 'allowEmptyCatch': true }],
            'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 0 }],
            'no-multi-spaces': [2, {
                'exceptions': {
                    'Identifier': true,
                    'ObjectExpression': true,
                    'ClassProperty': true,
                    'ImportDeclaration': true,
                    'VariableDeclarator': true,
                    'AssignmentExpression': true,
                    'ReturnStatement': true,
                    'BlockStatement': true,
                    'IfStatement': true,
                    'JSXAttribute': true,
                    'JSXIdentifier': true,
                    'JSXOpeningElement': true,
                    'JSXClosingElement': true,
                },
            }],
            'linebreak-style': [
                'error',
                'unix',
            ],
            'quotes': [ 'error', 'single', { avoidEscape: true, 'allowTemplateLiterals': true } ],
            'semi': [0, 'always'],
            'react/prefer-stateless-function': [2, {
                'ignorePureComponents': true,
            }],
            'react/prop-types': 2,
            'react/jsx-uses-vars': ['error'],
            'react/jsx-uses-react':  ['error'],
            'indent': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'indent': ['error', 4, {
                'SwitchCase': 1,
                'MemberExpression': 'off',
            }],
            'react/jsx-indent-props': [2, 4],
            'key-spacing': [2, {
                'singleLine': {
                    'beforeColon': false,
                    'afterColon':  true,
                },
                'multiLine': {
                    'beforeColon': false,
                    'afterColon':  true,
                    'mode': 'minimum',
                },
            }],
        },
    },
]
