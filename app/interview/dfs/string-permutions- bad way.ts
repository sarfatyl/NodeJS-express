// /**
//  * get all string permutations
//  * input abc
//  * output [abc, acb, bac, bca, cab, cba]
//  *
//  * loop through the string letters and call dfs for the another
//  */
//
// console.log(generateStringPermutationWrapper('abc'));
//
// function generateStringPermutationWrapper(str) {
// 	let result = [];
// 	generateStringPermutation(str,'', 0, result);
// 	return result;
// }
//
// function generateStringPermutation(str,currStr, index, result) {
// 	if(currStr.length === str.length) {
// 		result.push(currStr);
// 		return;
// 	}
// 	for(let i = 0; i < str.length; i++) {
// 		let char = str[i];
// 		if(i === str.indexOf(char)) continue;
// 		let remainingChars = str.substring(0,i) + str.substring(i+1);
// 		for(let j = 0; j < remainingChars.length; j++)
// 			generateStringPermutation(str, currStr + char + remainingChars[j], index + 1, result);
// 	}
// }

let findPermutations = (string) => {
	if (!string || typeof string !== 'string') {
		return 'Please enter a string';
	} else if (string.length < 2) {
		return string;
	}

	// This array will hold our permutations
	let permutationsArray = [];

	for (let i = 0; i < string.length; i++) {
		let char = string[i];

		// if char was used already, skip this time to remove duplicates
		if (string.indexOf(char) != i)
			continue;


		let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);


		for (let permutation of findPermutations(remainingChars)) {
			permutationsArray.push(char + permutation);
		}
	}
	return permutationsArray;
};


console.log(findPermutations('abc'));