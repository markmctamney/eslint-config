const dependencies = {
  rules: {
    "import/no-unused-modules": [
      1,
      {
        unusedExports: true
      }
    ]
  }
} as const;

export = dependencies;
