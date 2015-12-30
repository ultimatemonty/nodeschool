var fs = require('fs');

var file = process.argv[2];
if (!file) {
	throw new Error('Unable to find file');
}

var fileBuffer = fs.readFileSync(file);
var strBuffer = fileBuffer.toString();
console.log(strBuffer.match(/\n/g).length);
