const base = require('./base');
const graphql = require('./graphql');
const imports = require('./imports');
const json = require('./json');
const monorepo = require('./monorepo');
const native = require('./native');
const node = require('./node');
// const next = require('./next');
const react = require('./react');
const typescript = require('./typescript');
const typescriptAnalysis = require('./typescript-analysis');
const web = require('./web');
const yaml = require('./yaml');

const merge = require('ts-deepmerge').default;

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
    typescriptAnalysis,
    yaml,
    graphql
);

console.log({ config });

module.exports = config;
