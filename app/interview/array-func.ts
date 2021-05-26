let arr = ['prashant', 'sachin', 'yogesh', 'panam', 'pranav'];
let index = 2;
arr.splice(index, 1);

console.log(arr);
//["prashant", "sachin", "panam", "pranav"]


let arr = ['prashant', 'sachin', 'yogesh', 'panam', 'pranav'];
let exclude = 'prashant';
let updated = arr.filter(e => e !== exclude);
console.log(updated);
//["sachin", "yogesh", "panam", "pranav"]


let arr = ['prashant', 'sachin', 'yogesh', 'panam', 'pranav'];

let removeItems = (arr, index) => {
	return [...arr.slice(0, index), ...arr.slice(index+1, arr.length)];
}

arr = removeItems(arr, 2);
console.log(arr);
//["prashant", "sachin", "panam", "pranav"]

arr = removeItems(arr, 3);
console.log(arr);
//["prashant", "sachin", "panam"]


//removing the first item of the arr
let arr = ['prashant', 'sachin', 'yogesh', 'panam', 'pranav'];
arr.shift();

console.log(arr);
//['sachin', 'yogesh', 'panam', 'pranav']

// by changing the arr length
let arr = ['prashant', 'sachin', 'yogesh', 'panam', 'pranav'];
arr.length = 4;

console.log(arr);
//['prashant', 'sachin', 'yogesh', 'panam']


// check if object is array

let arr = [1, 2, 3];

Array.isArray(arr);
//true

Array.isArray('string');
//false

Array.isArray({abc: 'xyz'});
///false


// Add to index i the queueElement
items.splice(i, 0, queueElement);
