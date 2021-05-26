/**
Input: [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].

 **/

function totalFruit(tree) {
	if(!tree && !tree.length) {
		return 0;
	}
	let map = new Map();// store the type as a key and the last index occurrence as a value in our window
	let start = 0; // start index of current sliding window
	let end = 0; // end index of current sliding window
	let max = 0; // global max that we have found

	// loop through the tree values and increase/ decrease window size by the condition
	for(end; end < tree.length; end++) {
		// we have less equal 2 types in our window  in the map
		if(map.size <= 2) {
			map.set(tree[end], end);
		}
		// we have more than two types so we need to pick and remove the minIndex
		if(map.size > 2) {
			let minIndex = tree.length -1;
			for(let value of map.values()) {
				minIndex = Math.min(minIndex, value);
			}
			// decrease start window position
			start = minIndex + 1;
			// no longer consider the last type between three last types
			map.delete(tree[minIndex]);
		}
		// check the global max and update
		max = Math.max(max, end - start);
	}
	return max;
}