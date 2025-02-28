const fs = require('fs');
const path = require('path');

// Path configuration
const sourceFile = path.join(__dirname, '../resources/translations/translations/ja.js');
const targetFile = path.join(__dirname, '../resources/i18n-plugin/client/bpmnjs-i18n-extension/languages/ja/bpmn-js.js');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  console.error(`Error: Translation source file not found: ${sourceFile}`);
  process.exit(1);
}

// 1. Copy translation file with auto-generation notice
const sourceContent = fs.readFileSync(sourceFile, 'utf8');
const generatedContent = `/**
 * THIS FILE IS AUTO-GENERATED
 * DO NOT EDIT DIRECTLY
 * Generated on: ${new Date().toISOString()}
 */\n\n${sourceContent}`;

fs.writeFileSync(targetFile, generatedContent);
console.log(`Copied translation file with auto-generation notice: ${sourceFile} -> ${targetFile}`);
console.log('Translation file conversion completed');