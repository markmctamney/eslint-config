module.exports = {
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>/types` directory even it doesn't contain any source code, like `@types`, `types`, `definitions` and etc.

                // A path to a module which exports an object from which all paths will be derived.
                // This is also used to detect a TypeScript project structure.
                // Defaults to `process.cwd()`.
                // project: [
                //     './tsconfig.json',
                //     './apps/expo/tsconfig.json',
                //     './apps/next/tsconfig.json',
                //     './packages/*/tsconfig.json',
                // ],
            },
        },
    },

    extends: [
        'plugin:import/typescript',

        /**
         * Adds additional TypeScript linting rules.
         *
         * @link https://github.com/expo/expo/blob/85d0fac348d431760980f995f2a3aabb54bf839d/packages/eslint-config-universe/README.md#optional-additional-typescript-typed-linting
         * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
         */
        // 'universe/shared/typescript-analysis',
    ],

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

    overrides: [
        /** TypeScript checking */
        {
            files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
            parser: '@typescript-eslint/parser',
            // parserOptions: { project: ['**/tsconfig.json'] },
            // extends: ['universe/shared/typescript-analysis'],
        },
    ],
};
