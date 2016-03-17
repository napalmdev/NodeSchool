var http = require('http');

http.get(process.argv[2], function(res) {

  res.on('data', function (data) {
    console.log(data);
  }).on('error', function (err) {
    throw err;
  }).setEncoding('utf8');


});
