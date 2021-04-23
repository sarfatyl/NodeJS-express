/** Recursive way **/

const quickSort = (arr, start = 0, end = arr.length) => {
	let pivotIndex = pivot(arr, start, end);

	if (start >= end) return arr;
	quickSort(arr, start, pivotIndex);
	quickSort(arr, pivotIndex + 1, end);

	return arr;
};



const quickSort = (originalList) => {
	const list = [...originalList];
	if (list.length < 2) {
		return list;
	}
	const pivot = list[0];
	const smaller = list.filter((item) => item < pivot);
	const bigger = list.filter((item) => item > pivot);
	return [...quickSort(smaller), pivot, ...quickSort(bigger)];

};




/**
Best-case x log n) (simple part...

Worst-case space complexity: O(n) auxiliary .

    Average performance: O(n log n) **/