"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const ts_deepmerge_1 = __importDefault(require("ts-deepmerge"));
const dependencies_1 = __importDefault(require("./dependencies"));
const monorepo_1 = __importDefault(require("./monorepo"));
const native_1 = __importDefault(require("./native"));
const next_1 = __importDefault(require("./next"));
const node_1 = __importDefault(require("./node"));
const base_1 = __importDefault(require("./shared/base"));
const graphql_1 = __importDefault(require("./shared/graphql"));
const imports_1 = __importDefault(require("./shared/imports"));
const json_1 = __importDefault(require("./shared/json"));
const prettier_1 = __importDefault(require("./shared/prettier"));
const react_1 = __importDefault(require("./shared/react"));
const typescript_1 = __importDefault(require("./shared/typescript"));
const typescript_analysis_1 = __importDefault(require("./shared/typescript-analysis"));
const yaml_1 = __importDefault(require("./shared/yaml"));
const web_1 = __importDefault(require("./web"));
// Deep merge configs
const config = (0, ts_deepmerge_1.default)(base_1.default, node_1.default, imports_1.default, json_1.default, monorepo_1.default, native_1.default, react_1.default, web_1.default, typescript_1.default, next_1.default, typescript_analysis_1.default, dependencies_1.default, yaml_1.default, graphql_1.default, prettier_1.default);
if (process.env.DEBUG)
    console.log({ config });
module.exports = config;
