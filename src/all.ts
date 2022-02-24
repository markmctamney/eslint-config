import dependencies from "./dependencies";
import monorepo from "./monorepo";
import native from "./native";
import next from "./next";
import node from "./node";
import base from "./shared/base";
import graphql from "./shared/graphql";
import imports from "./shared/imports";
import json from "./shared/json";
import web from "./web";
import prettier from './shared/prettier';

import merge from 'ts-deepmerge';
import react from "./shared/react";
import typescript from "./shared/typescript";
import typescriptAnalysis from "./shared/typescript-analysis";
import yaml from "./shared/yaml";

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

export default config;
