#### FFI lib in node to parse a json object

```js
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
```

```
~/p/parse_json_in_rust ࿘  cargo build --release && node index.js
Parsing in rust: 32883 ms
Parsing in node: 5805 ms
```
