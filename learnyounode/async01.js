var http = require('http');


getURL(process.argv[2], 0);
getURL(process.argv[3], 1);
getURL(process.argv[4], 2);


function getURL(url, order) {
  var dados = "";

  http.get(url, function (res) {
    res.on('data', function (data) {
      dados += data;
    });
    res.on('end', function () {
        printData(dados, order);
    }).setEncoding('utf8');
  });
}


var finishedReqs = [];
var printed = [];

var printData = function(data, order) {
  finishedReqs = {order: order, data: data};
  console.log(finishedReqs);
};
