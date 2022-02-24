const eslintConfig = {
    root: true,
    extends: [require.resolve('./dist/default.js')],
    settings: {
        react: {
            version: '1000.0.0',
        },
    },
};

module.exports = eslintConfig;
