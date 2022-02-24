// Deep merge configs
const config = {
  extends: [
    "./dependencies",
    "./monorepo",
    "./native",
    // './next',
    "./node",
    "./shared/base",
    "./shared/graphql",
    "./shared/imports",
    "./shared/json",
    "./shared/prettier",
    "./shared/react",
    "./shared/typescript",
    "./shared/typescript-analysis",
    "./shared/yaml",
    "./web"
  ]
} as const;

if (process.env.DEBUG) console.log({ config });
export = config;
