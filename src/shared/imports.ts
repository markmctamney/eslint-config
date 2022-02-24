const imports = {
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  plugins: ["import"],
  rules: {
    /* -------------------------------------------------------------------------- */
    /*                                   Imports                                  */
    /* -------------------------------------------------------------------------- */
    // Superceded by TS parser I believe
    "import/no-unresolved": 0,
    "import/newline-after-import": 1,
    "import/no-namespace": 1,
    /** Deterministic Import Order */
    "import/order": [
      "warn",
      {
        groups: [
          "unknown",
          "type",
          "object",
          "builtin",
          "external",
          ["parent", "sibling"],
          "index"
        ],
        pathGroups: [
          {
            pattern: "@nexpo/**",
            group: "external",
            position: "after"
          }
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc"
        }
      }
    ]
  },
  overrides: [
    {
      files: ["src/**/*"],
      rules: {
        "import/no-default-export": 1
      }
    }
  ]
} as const;

export = imports;
