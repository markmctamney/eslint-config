module.exports = {
    extends: ['universe/native', 'plugin:react-native/all'],

    rules: {
        /* -------------------------------------------------------------------------- */
        /*                                React Native                                */
        /* -------------------------------------------------------------------------- */
        // Temporarily off while I'm doing heavy mocking/design
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/sort-styles': 0, // Causing ESLint to fail just because it hasn't set meta.fixable new flag. Annoying.
        'react-native/no-raw-text': ['off', { skip: ['RNText', 'NativeText'] }],
    },
};
