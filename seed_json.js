fs = require('fs');

var array = [];

for (var i = 0; i < 10000000; i++) {
  array.push({a: i, b: i});
}

fs.writeFileSync('data.json', JSON.stringify(array), 'utf8');
