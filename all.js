"use strict";
var merge = require('ts-deepmerge')["default"];
var dependencies = require('./dependencies');
var monorepo = require('./monorepo');
var native = require('./native');
var next = require('./next');
var node = require('./node');
var base = require('./shared/base');
var graphql = require('./shared/graphql');
var imports = require('./shared/imports');
var json = require('./shared/json');
var prettier = require('./shared/prettier');
var react = require('./shared/react');
var typescript = require('./shared/typescript');
var typescriptAnalysis = require('./shared/typescript-analysis');
var yaml = require('./shared/yaml');
var web = require('./web');
// Deep merge configs
var config = merge(base, node, imports, json, monorepo, native, react, web, typescript, next, typescriptAnalysis, dependencies, yaml, graphql, prettier);
if (process.env.DEBUG)
    console.log({ config: config });
module.exports = config;
