var fs = require('fs');
var path = require('path');

var args = process.argv;

fs.readdir(args[2], function (err, list) {

  if(err) throw err;

  list.map( function (el) {
    if(path.extname(el) === '.'+args[3])
      console.log(el);
  });
});
