/**
 * input: string that representing phone number
 * output: list of latter combination that representing by the input
 *
 * example:
 * input : 23 (2->'abc', 3-> 'def')
 * output: ['ad','ae',af','bd'.....]
 *
 * pseudo code
 * 1. init list result to store all the combinations
 * 2. init map that represent the letters in index as a phone numbers
 * 3. call to recursive dfs to solve this problem
 * 4. dfs(result, map, str, index
 * 	5. check base cases - index = input length
 * 		5.1 if yes, add str to result and return
 * 	6. get all the letters of digit[index]
 * 	7. loop through the letters
 * 		7.1 add the letter to tempStr
 * 		7.2 call dfs again with tempStr, index++
 * 		7.3 remove the letter from tempStr because we can start to the next letter in the next iteration
 *
 *	8. return result
 */
console.log(lettersCombinationsOfAPhoneNumbers('23'));

function lettersCombinationsOfAPhoneNumbers(digits) {
	let result = [];
	let map = ['','','abc','def','ghi','jkl'];
	dfs(digits, map, result, '', 0);
	return result;
}
function dfs(digits, map, result, str, index) {
	// base case
	if(index === digits.length) {
		result.push(str);
		return;
	}
	// get all the letters that representing by digits[index]
	let letters = map[Number(digits[index])];
	for(let i = 0; i < letters.length; i++) {
		let letter = letters[i];
		dfs(digits,map,result,str+letter, index+1);
	}
}