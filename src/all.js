const merge = require('ts-deepmerge').default;

const base = require('./base');
const dependencies = require('./dependencies');
const graphql = require('./graphql');
const imports = require('./imports');
const json = require('./json');
const monorepo = require('./monorepo');
const native = require('./native');
const next = require('./next');
const node = require('./node');
const prettier = require('./prettier');
const react = require('./react');
const typescript = require('./typescript');
const typescriptAnalysis = require('./typescript-analysis');
const web = require('./web');
const yaml = require('./yaml');

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
