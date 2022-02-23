const base = require('./base');
const imports = require('./imports');
const json = require('./json');
const monorepo = require('./monorepo');
const native = require('./native');
// const next = require('./next');
const react = require('./react');
const typescript = require('./typescript');
const typescriptAnalysis = require('./typescript-analysis');
const yaml = require('./yaml');

const merge = require('ts-deepmerge').default;

// Deep merge configs
const config = merge(base, imports, json, monorepo, native, react, typescript, typescriptAnalysis, yaml);

console.log({ config });

module.exports = config;
