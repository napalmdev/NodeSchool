var fs = require('fs');

var bf = fs.readFileSync(process.argv[2]).toString();


console.log(bf.split('\n').length - 1);