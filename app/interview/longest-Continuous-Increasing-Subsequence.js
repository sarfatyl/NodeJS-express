/**
 * @param {number[]} nums
 * @return {number}
 */


var findLengthOfLCIS = function(nums) {
	let ans = 0, startIndx = 0;

	for(let i = 0; i < nums.length; i++) {
		if(i > 0 && nums[i-1] >= nums[i]) {
			startIndx = i;
		}
		ans = Math.max(ans, i-startIndx +1);
	}
	return ans;
};