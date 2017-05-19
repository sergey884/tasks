function flatten(arr) {
	var res = [];
	for (var i = 0, li = arr.length; i < li; i++) {
		if (Array.isArray(arr[i])) {
			res = res.concat(flatten(arr[i]));
		} else {
			res.push(arr[i]);
		}
	}
	return res;
}

//flatten function implementation using reduce
function flatten(arr) {
	return arr.reduce(function(res, current) {
		return res.concat(Array.isArray(current) ? flatten(current) : current);
	}, []);
}

var arr = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];
var arr2 = [[[1, [2]],[3, 4, 5]], [6, [7, [8]], 9]];
var arr3 = [[1,[2,[[3]]]],4,[5,[[[6]]]]];

flatten(arr);   //[1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten(arr2);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten(arr3);  //[1, 2, 3, 4, 5, 6]