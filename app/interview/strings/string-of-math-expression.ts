function evil(fn) {
	return new Function('return ' + fn)();
}

console.log( evil('5+6*2') ); // => 40.4