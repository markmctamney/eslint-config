const react = {
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        /* -------------------------------------------------------------------------- */
        /*                                    React                                   */
        /* -------------------------------------------------------------------------- */
        /**
         * New React JSX transform
         *
         * @link https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
         */
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        // Prefer named functions so that they don't show up as anonymous in React devtools.
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
} as const;

export = react;
