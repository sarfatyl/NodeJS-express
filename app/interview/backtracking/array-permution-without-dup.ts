/**
 * Input: nums = [1,2,3]
   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 time complexity O(n!)
 */

let arr = [1,2,3]; // without duplicate
console.log(permute(arr));

function permute(arr) {
	let res = [];
	let currPerm = [];
	let used = [];
	dfsWithBackTracking(res, currPerm, arr,used);
	return res;
}

function dfsWithBackTracking(res, currPerm, arr,used){
	if(currPerm.length === arr.length) {
		res.push([...currPerm]);
		return;
	}
	for(let i = 0; i < arr.length; i++) {
		if (used[i]) continue;
		used[i] = 1;
		currPerm.push(arr[i]);
		dfsWithBackTracking(res, currPerm, arr, used);
		currPerm.pop();
		used[i] = 0;
	}
}