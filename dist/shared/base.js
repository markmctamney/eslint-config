"use strict";
const baseConfig = {
    // root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['universe'],
    parserOptions: { ecmaVersion: 8 },
};
module.exports = { ...baseConfig };
