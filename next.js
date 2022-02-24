"use strict";
var next = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: { ecmaVersion: 8 },
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
    "extends": ['plugin:@next/next/recommended']
};
module.exports = next;
