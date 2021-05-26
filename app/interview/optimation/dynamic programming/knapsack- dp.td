/**
Time complexity: O(values.length * target).
Space complexity: O(values.length * target).
 Top-down approach (Recursive)

 We use Hashmap to store the result of the already solved subproblems
 using a key and then before solving the sub-problems first check if its solved then used that value, else solve it.

 */

const values = [20, 5, 10, 40, 15, 25];
const weights = [1, 2, 3, 8, 7, 4];
const target = 10;
const dp = new Map();

const knapSack = (values, weights, n, target, lookup) => {
	// Negative capacity
	if (target < 0) {
		return Number.MIN_SAFE_INTEGER;
	}

	// No items left or capacity becomes 0
	if (n < 0 || target == 0) {
		return 0;
	}

	// Construct an unique map key from dynamic elements of the input
	const key = `${n}|${target}`;

	// If sub-problem is seen for the first time, solve it and
	// store its result in a map
	if (!lookup.has(key))
	{
		// Include current item n in knapSack (values[n]) & recur
		// for remaining items (n-1) with reduced capacity (target - weights[n])
		let include = values[n] + knapSack(values, weights, n - 1, target - weights[n], lookup);

		// Exclude current item n from knapSack and recur for
		// remaining items (n-1)
		let exclude = knapSack(values, weights, n - 1, target, lookup);

		// Assign max value we get by including or excluding current item
		lookup.set(key, Math.max(include, exclude));
	}

	// Return solution to current sub-problem
	return lookup.get(key);
}
console.log(knapSack(values, weights, values.length - 1, target, dp));


/**
 * Bottom-up approach (Iterative)
 * Time complexity: O(values.length * target).
Space complexity: O(values.length * target).
 */

const knapSackIt = (values, weights, target) => {
	// T[i][j] stores the maximum value of knapsack having weight
	// less than equal to j with only first i items considered.
	let T = new Array(values.length + 1);
	for(let i = 0; i < T.length; i++){
		T[i] = new Array(target+1).fill(0);
	}

	// do for ith item
	for (let i = 1; i <= values.length; i++) {
		// consider all weights from 0 to maximum capacity W

		for (let j = 0; j <= target; j++) {
			// don't include ith element if j-weights[i-1] is negative
			if (weights[i-1] > j) {
				T[i][j] = T[i-1][j];
			} else {
				// find maximum value we get by excluding or including
				// the i'th item
				T[i][j] = Math.max(T[i-1][j], T[i-1][j-weights[i-1]] + values[i-1]);
			}
		}
	}

	// return maximum value
	return T[values.length][target];
}