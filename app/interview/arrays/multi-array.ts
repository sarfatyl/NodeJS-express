const arr1 = [1,2,3,4,5];

console.log(multiArr(arr1));

function multiArr(arr1) {
	let res = [];
	let currMulti = 1;
	for(let i = 0; i < arr1.length; i++) {
		res[i] = res[i] ? res[i] * currMulti : currMulti;
		currMulti *= arr1[i];
	}
	currMulti = 1;
	for(let i = arr1.length - 1; i >= 0 ; i--) {
		res[i] = res[i] * currMulti;
		currMulti *= arr1[i];

	}
	return res;

}