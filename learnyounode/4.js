var fs = require('fs');

var file = process.argv[2];
if (!file) {
	throw new Error('Unable to find file');
}

fs.readFile(file, 'utf-8', function(err, str) {
	console.log(str.match(/\n/g).length);
});
