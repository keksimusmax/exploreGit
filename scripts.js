//closures
var add = (function() {
	var counter = 0;
	return function() {
		console.log(counter);
		counter += 1;
	}
})();

add();
add();
add();