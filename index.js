var ffi = require('ffi');
var path = require('path');

var lib = ffi.Library(path.join(__dirname, './target/release/libparsejson'), {
  json: ['string', []],
});

var start = +new Date();
var json = lib.json();
console.log('Parsing in rust:', +new Date() - start, 'ms');

start = +new Date();
require('./data.json');
console.log('Parsing in node:', +new Date() - start, 'ms');
