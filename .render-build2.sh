#!/usr/bin/env bash
set -o errexit

# Install dependencies
npm install
npm run install-client

# Ensure concurrently is executable
chmod +x ./node_modules/.bin/concurrently

# Build the client
npm run build-client

npm start




