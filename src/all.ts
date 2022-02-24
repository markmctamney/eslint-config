const merge = require("ts-deepmerge").default;
const dependencies = require("./dependencies");
const monorepo = require("./monorepo");
const native = require("./native");
const next = require("./next");
const node = require("./node");
const base = require("./shared/base");
const graphql = require("./shared/graphql");
const imports = require("./shared/imports");
const json = require("./shared/json");
const prettier = require("./shared/prettier");
const react = require("./shared/react");
const typescript = require("./shared/typescript");
const typescriptAnalysis = require("./shared/typescript-analysis");
const yaml = require("./shared/yaml");
const web = require("./web");
// Deep merge configs
const config = merge(
  base,
  node,
  imports,
  json,
  monorepo,
  native,
  react,
  web,
  typescript,
  next,
  typescriptAnalysis,
  dependencies,
  yaml,
  graphql,
  prettier
);
if (process.env.DEBUG) console.log({ config });
module.exports = config;
