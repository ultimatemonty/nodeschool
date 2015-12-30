var args = process.argv;
var sum = 0;

if (args.length > 2) {
	var i = 2;
	var num;
	for (i; i <= args.length; i++) {
		num = +args[i];
		if (num) {
			sum += num;
		}
	}
}
console.log(sum);
