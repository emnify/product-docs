#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const pass = "\x1B[1;32m✓\x1B[39m";
const fail = "\x1B[1;31m✗\x1B[39m";
const waiting = "\x1B[1;33m☕︎\x1B[39m";

const sourceDir = path.join(
  __dirname,
  "..",
  "node_modules",
  "eui-design-tokens",
  "prepared-tokens",
  "emnify",
  "css"
);
const targetDir = path.join(__dirname, "..", "src", "css", "design-tokens");

console.info(`${waiting} Copying design token files to ${targetDir}...`);

if (!fs.existsSync(sourceDir) || !fs.lstatSync(sourceDir).isDirectory()) {
  console.error(
    `${fail} Source directory ${sourceDir} does not exist - did you install node modules?`
  );
  process.exit(1);
}

for (const file of fs.readdirSync(sourceDir)) {
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(targetDir, file);
  fs.copyFileSync(sourceFile, targetFile);
}

const fileToUpdate = path.join(
  __dirname,
  "..",
  "src",
  "css",
  "design-tokens",
  "colors-light.css"
);
if (!fs.existsSync(fileToUpdate)) {
  console.error(`${fail} colors-light.css does not exist at expected path`);
  process.exit(1);
}

console.info(`${waiting} Updating selector in colors-light.css...`);

const data = fs.readFileSync(fileToUpdate, "utf8");
const updated = data.replace(/.eui-light-theme/g, 'html[data-theme="light"]');
fs.writeFileSync(fileToUpdate, updated, "utf8");

console.info(`${pass} Done!`);
process.exit(0);
