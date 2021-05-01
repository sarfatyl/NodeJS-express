
console.log(gererateParenrthesisWrapper(3));

/**
 * time complexity O(2^n)
 * space complexity O(2^n)
 * @param n
 */

function gererateParenrthesisWrapper(n) {
	let result = [];
	 gererateParenrthesis(result, '', n, n);
	 return result;
}
function gererateParenrthesis(result, str, left, right) {
	 // base cases
	if(left < 0 || left > right) {
		return;
	}
	if(left === 0 && right === 0 ) {
		result.push(str);
		return;
	}
	gererateParenrthesis(result, str + '(' , left -1, right);
	gererateParenrthesis(result, str + ')' , left , right-1);
}