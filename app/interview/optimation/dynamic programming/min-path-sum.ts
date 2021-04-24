
let arr1 = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(arr1));

// Given an n*m array with numbers, find the min sun path from start to end
function minPathSum(arr) {
	console.log(arr);
	let dpTable = new Array(arr.length);
	for(let i = 0; i < arr[0].length; i++) {
		dpTable[i] = new Array(arr[i].length);
	}
	dpTable[0][0] = arr[0][0];
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr[i].length; j++) {
			if(i === 0 && j === 0) continue;
			if(i-1 >= 0 && j-1 >= 0) {
				dpTable[i][j] = Math.min(dpTable[i-1][j], dpTable[i][j-1]) + arr[i][j];
			}else if(i-1 >= 0) {
				dpTable[i][j] = dpTable[i-1][j] + arr[i][j];
			}else if(j-1 >= 0){
				dpTable[i][j] = dpTable[i][j-1] + arr[i][j];
			}
		}
	}
	console.log('dpTable',dpTable);
	return dpTable[arr.length - 1][arr[0].length - 1];
}