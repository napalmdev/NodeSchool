var fs = require('fs');
var path = require('path');

module.exports = function(filePath, fileExt, callback) {

  fs.readdir(filePath, function(err, list) {
    if(err) return callback(err);
    err = null;
    list = list.filter( function (el) {
      return path.extname(el) === '.'+fileExt;
    });

    return callback(null, list);

  });
}
