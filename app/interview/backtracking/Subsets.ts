/**
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * @param nums
 */

function subsets(nums: number[]): number[][] {
	let res = [];
	if(!nums.length) return res;
	backtracking(nums, res,[], 0);
	return res;
};
function backtracking(nums, res,curr, index) {
	res.push([...curr]);

	for(let i = index; i < nums.length; i++ ) {
		curr.push(nums[i]);
		backtracking(nums,res, curr, i + 1);
		curr.pop();
	}
}