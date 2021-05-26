/**
 * Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
 */

function MaxProfit(nums) {
	if(!nums || !nums.length) {
		return 0;
	}
	let dp = [];
	// base case - in the first house the only benefit that we can achieve id the nums[0]
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);

	for(let i = 2; i < nums; i++) {
		dp[i] = Math.max(dp[i-1] , dp[i-2] + nums[i])
	}

	return dp[nums.length -1]
}