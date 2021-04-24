let coins = [1, 3, 5];

function minCoinsToGetN(amount: number, coins) {
	let dp = [];
	// base case
	dp[0] = 0;
	for (let j = 1; j <= amount; ++j) {
		for (let i = 0; i < coins.size(); ++i) {
			if (coins[i] <= j) {
				dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
			}
		}
	}
	return dp[n];
}
