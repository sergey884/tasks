function currying(func) {
	var count = 0;
	var arr = [];
	function f() {
		var args = [].slice.call(arguments, 0);
		count += args.length;
		if (count < func.length) {
			arr = arr.concat(args);
		} else {
			arr = arr.concat(args).slice(0, func.length);
			return func.apply(this, arr);
		}
		return f;
	}
	return f;
}

function sum(a, b) {
	return a + b;
}

function mul(a, b) {
	return a * b;
}

//Currying sum function
var currySum = currying(sum);
currySum(4)(19);

//Currying mul function
var curryMul = currying(mul);
curryMul(5)(10);