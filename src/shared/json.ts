const json = {
  overrides: [
    /* -------------------------------------------------------------------------- */
    /*                                    JSON                                    */
    /* -------------------------------------------------------------------------- */
    // 'json/*': ['warn', { allowComments: false }],
    // TODO: We shouldn't be applying JSON rules to all files probably. Just make the JSON package its own override for JSON files only.
    {
      files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
      parser: "jsonc-eslint-parser",
      // parser: '@babel/eslint-parser',
      extends: [
        "prettier",
        "plugin:jsonc/recommended-with-jsonc",
        "plugin:json-schema-validator/recommended"
      ],
      rules: {
        "no-irregular-whitespace": 0,
        "json-schema-validator/no-invalid": "error"
      }
    }
  ]
} as const;

export = json;
