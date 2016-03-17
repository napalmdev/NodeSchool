//console.log(process.argv);
var i = 2, len = process.argv.length, counter = 0;
for(; i < len; i++) {
  counter+= Number(process.argv[i]);
}
console.log(counter);
