module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },

    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await

    // settings: {
    //     // next: {
    //     //     rootDir: './apps/next',
    //     // },
    // },

    // overrides: [
    //     // Letting Next handle its own ESLint config
    //     /**  NextJS specific setup */
    //     {
    //         files: ['apps/next/**'],

    extends: ['plugin:@next/next/recommended'],

    //         // settings: {
    //         //     next: {
    //         //         rootDir: './apps/next',
    //         //     },
    //         // },
    //         // rules: {
    //         //     'import/no-unused-modules': 0,
    //         // },
    //     },
    // ],
};
