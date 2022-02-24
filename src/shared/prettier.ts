import { resolveConfig } from 'prettier';

const defaultPrettierConfig = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    semi: true,
} as const;

const parsedConfig = resolveConfig.sync(process.cwd()) ?? defaultPrettierConfig;

console.log('prettier', parsedConfig);

const prettierConfig = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['warn', parsedConfig],
    },
} as const;

export = prettierConfig;
