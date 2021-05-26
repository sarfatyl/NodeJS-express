/**
 *  time complexity O(n!)
 */

let str = 'abc';
console.log(permute(str));

function permute(str){
	let res = [];
	let used =[];
	let steArr = [];
	dfsWithBackTracking(str, res, used, []);
	return res;
}
function dfsWithBackTracking(str, res, used, currStr) {
	if(str.length === currStr.length) {
		res.push(currStr.join(''));
		return;
	}
	for(let i = 0; i < str.length; i++) {
		if(used[i]) continue; // already have seen
		used[i] = 1;
		currStr.push(str[i]);
		dfsWithBackTracking(str, res, used, currStr);
		currStr.pop();
		used[i] = 0;

	}
}