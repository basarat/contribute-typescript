/**
 * This script is responsible for making required modifications to our version of TypeScript
 */
var fs = require('fs');
var EOL = require('os').EOL;
function readFile(filePath) {
    return fs.readFileSync(__dirname + '/' + filePath, 'utf8');
}
function writeFile(filePath, content) {
    fs.writeFileSync(__dirname + '/' + filePath, content);
}
var dtsOriginal = readFile('../bin/typescript.d.ts');
var jsOriginal = readFile('../bin/typescript.js');
var finalDtsLocation = '../bin/ntypescript.d.ts';
var finalJsLocation = '../bin/ntypescript.js';
var finalDtsContent = dtsOriginal;
var finalJsContent = jsOriginal;
finalDtsContent = finalDtsContent + EOL + "\ndeclare module \"ntypescript\" {\n    export = ts;\n}\n";
finalDtsContent = finalDtsContent.replace(/const enum /g, 'enum ');
finalJsContent = finalJsContent.replace(/ts.executeCommandLine\(ts\.sys\.args\);/g, '');
writeFile(finalDtsLocation, finalDtsContent);
writeFile(finalJsLocation, finalJsContent);
