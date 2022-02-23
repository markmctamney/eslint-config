const prettier = require('prettier');

const defaultPrettierConfig = {
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'es5',
    semi: true,
};

const prettierConfig = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['warn', prettier.resolveConfig.sync(process.cwd()) || defaultPrettierConfig],
    },
};

module.exports = prettierConfig;
