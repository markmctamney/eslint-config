const typescriptAnalysis = {
    parserOptions: { ecmaVersion: 8 },
    overrides: [
        /** TypeScript checking */
        {
            files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: { project: ['**/tsconfig.json'] },
            extends: ['universe/shared/typescript-analysis'],
        },
    ],
};

module.exports = typescriptAnalysis;
