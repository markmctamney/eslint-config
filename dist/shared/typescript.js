"use strict";
const typescript = {
    parserOptions: { ecmaVersion: 8 },
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    plugins: ['@typescript-eslint'],
    extends: ['plugin:import/typescript'],
    rules: {
        /* -------------------------------------------------------------------------- */
        /*                                 TypeScript                                 */
        /* -------------------------------------------------------------------------- */
        '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-inferrable-types': 2,
        '@typescript-eslint/consistent-type-imports': 1,
        'padding-line-between-statements': 'off',
        '@typescript-eslint/padding-line-between-statements': [
            1,
            {
                blankLine: 'always',
                prev: '*',
                next: ['interface', 'type'],
            },
            {
                blankLine: 'any',
                prev: ['interface', 'type'],
                next: ['interface', 'type'],
            },
        ],
    },
};
module.exports = typescript;
