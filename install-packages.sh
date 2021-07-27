#!/usr/bin/env sh

# Dev + Peer
echo "Installing Dev + Peer dependencies..."
yarn add -D -P \
    eslint \
    prettier

# Dev
echo "Installing Dev dependencies..."
yarn add -D \
    typescript

# Peer
echo "Install Peer dependencies..."
yarn add -P -O \
    graphql

# Base Deps
echo "Installing base dependencies..."
yarn add \
    eslint-config-universe \
    eslint-plugin-import \
    eslint-plugin-jsx-a11y \
    eslint-plugin-monorepo

# React / Native
echo "Installing React dependencies..."
yarn add \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-react-native

# TS
echo "Installing Typescript dependencies..."
yarn add \
    eslint-import-resolver-typescript \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser

# JSON
echo "Installing JSON dependencies..."
yarn add \
    eslint-plugin-json \
    eslint-plugin-json-format \
    eslint-plugin-json-schema-validator \
    eslint-plugin-jsonc \
    jsonc-eslint-parser

# GraphQL/Misc
echo "Installing miscellaneous dependencies..."
yarn add \
    eslint-plugin-graphql \
    eslint-plugin-yaml
