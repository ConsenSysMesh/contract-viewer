var hljs = require('highlightjs');
var injectSolidity = require('highlightjs-solidity');

injectSolidity(hljs);

module.exports = hljs;
