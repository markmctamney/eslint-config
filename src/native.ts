const native = {
    extends: ['universe/native', 'plugin:react-native/all'],

    rules: {
        /* -------------------------------------------------------------------------- */
        /*                                React Native                                */
        /* -------------------------------------------------------------------------- */
        // Temporarily off while I'm doing heavy mocking/design
        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/sort-styles': 0,
        'react-native/no-raw-text': ['off', { skip: ['RNText', 'NativeText'] }],
    },
} as const;

export = native;
