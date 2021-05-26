function lengthOfLIS(arr) {
	let dp = [];
	dp[0] = 1;
	let maxAns = 1;

	for(let i = 1; i < arr.length; i++) {
		let currentMax = 0;
		for(let j = 0; j < i; j++) {
			if(arr[i] > arr[j]) {
				currentMax = Math.max(currentMax, dp[j]);
			}
			dp[i] = currentMax + 1;
		}
		maxAns = Math.max(maxAns, currentMax);
	}
	return maxAns;

}