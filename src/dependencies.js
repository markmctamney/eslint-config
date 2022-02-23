const dependencies = {
    rules: {
        'import/no-unused-modules': [
            1,
            {
                unusedExports: true,
                // ignoreExports: [
                //     // React Native platform-specific files
                //     '**/*.native.tsx',
                //     '**/*.native.ts',
                //     // '**/*.ios.tsx',
                //     // '**/*.ios.ts',
                //     // '**/*.android.tsx',
                //     // '**/*.android.ts',
                //     '**/*.web.tsx',
                //     '**/*.web.ts',
                //     '**/_*.tsx', // Allow carving out of underscore-prefixed files
                //     '**/*.WIP.tsx',
                //     '**/*.WIP.ts',
                //     // '**/*.web.ts',
                //     '**/__reference__/**', // Allow importing from __reference__
                //     'apps/next/src/pages/**',
                //     'apps/expo-bare/**',
                //     'apps/splash-screen-example/**',
                //     'apps/**/App.ts',
                // ],
            },
        ],
    },
};

module.exports = dependencies;
