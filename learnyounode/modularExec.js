var mod = require('./modularMod.js');

mod(process.argv[2], process.argv[3], function (err, data) {
  if(err) throw err;
  data.forEach( function (el) {
    console.log(el);
  });
});
