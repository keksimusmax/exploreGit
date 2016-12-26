var textToPut = prompt("Insert heading");
var h1 = document.querySelector('h1');
h1.innerHTML += textToPut;

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