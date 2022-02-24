import * as prettier from 'prettier';

const defaultPrettierConfig = {
  printWidth: 100,
  tabWidth: 4,
  singleQuote: true,
  trailingComma: "es5",
  semi: true
} as const;

const prettierConfig = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      prettier.resolveConfig.sync(process.cwd()) || defaultPrettierConfig
    ]
  }
} as const;

export = prettierConfig;