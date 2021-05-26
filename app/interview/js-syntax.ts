// Array
//argument

let arr = [];

Array.isArray([1, 2, 3]);  // true

arr.forEach(function(item, index, array) {
	console.log(item, index);
});

let last = arr.pop(); // remove Orange (from the end)

let first = arr.shift(); // remove Apple from the front

let newLength = arr.unshift('Strawberry'); // add to the front


//Find the index of an item in the Array
let pos = arr.indexOf('Banana');

//Remove an item by index position

let removedItem = arr.splice(index, 1); // this is how to remove an item

// Array.prototype.findIndex()
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

// Array.prototype.map()
// Returns a new array containing the results of calling a function on every element in this array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//

function replaceAll(str, find, replace) {
	var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
	return str.replace(new RegExp(escapedFind, 'g'), replace);
}
//usage example
var sentence='How many shots did Bill take last night? That Bill is so crazy!';
var blameSusan=replaceAll(sentence,'Bill','Susan');


// The eval() function evaluates JavaScript code represented as a string.

console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(String('2 + 2')));
// expected output: false
