/**
 * Time complexity: O(2 ^ n).
Space complexity: O(1).
 */

const values = [20, 5, 10, 40, 15, 25];
const weights = [1, 2, 3, 8, 7, 4];
const target = 10;

// naive solution - recursive implementation
const knapsackNaive = (values, weights, n, target) => {
	//Negative value
	if(target < 0){
		return Number.MIN_SAFE_INTEGER;
	}

	//No items left or capacity becomes 0
	if(n < 0 || target === 0){
		return 0;
	}

	// Include current item n in knapsackNaive (values[n]) and recur for
	// remaining items (n - 1) with reduced capacity (weight - weights[n])
	let include = values[n] + knapsackNaive(values, weights, n - 1, target - weights[n]);

	// Exclude current item n from knapsackNaive and recur for
	// remaining items (n - 1)
	let exclude = knapsackNaive(values, weights, n - 1, target);

	// Return maximum value we get by including or excluding current item
	return Math.max(include, exclude);
};
console.log(knapsackNaive(values, weights, values.length - 1, target));
