/** Binary search
 * time complexity - logN
 * **/

let arr = [1,2,3,4,5];
console.log(binarySearchIter(arr, 4));
console.log(binarySearchRecWrap(arr, 2));
// iterative way

function binarySearchIter(arr, num) {
	let start = 0;
	let end = arr.length -1;

	while(start < end) {
		let mid =  Math.floor((end - start)/2);
		if(arr[mid] === num) {
			return mid;
		}else if(num < arr[mid]) {
			end = mid -1;
		}else {
			start = mid+1;
		}
	}
	return -1;
}

// Recursive way

function binarySearchRecWrap(arr, num) {
	return binarySearchRec(arr, num, 0, arr.length -1);
}

function binarySearchRec(arr, num, start , end) {
	if(start > end) return -1;
	let mid = Math.floor((start+end)/2);
	if(arr[mid] === num) return mid;
	if(num < arr[mid])
		return binarySearchRec(arr, num, start, mid -1);
	else
		return binarySearchRec(arr, num, mid+1, end);
}


