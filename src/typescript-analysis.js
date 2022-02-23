module.exports = {
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    overrides: [
        /** TypeScript checking */
        {
            files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
            parser: '@typescript-eslint/parser',
            // parserOptions: { project: ['**/tsconfig.json'] },
            extends: ['universe/shared/typescript-analysis'],
        },
    ],
};
