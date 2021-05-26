/**
 *
 * Given the root of a binary tree and an integer targetSum,
 * return all root-to-leaf paths where each path's sum equals targetSum.
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
	}
}


function getAllPathEqualsSumWrapper(root, sum) {
	let result = [];
	let currPath = [];
	getAllPathEqualsSum(root, result, currPath, sum);
	return result;
}

function getAllPathEqualsSum(root, result: any[], currPath: any[], sum) {
	if(root === null) return;

	currPath.push(root);

	if(root.left === null && root.right === null && sum === 0) {
		result.push([...currPath]);
	}
	getAllPathEqualsSum(root.left, result,currPath,sum - currPath.val);
	getAllPathEqualsSum(root.right, result,currPath,sum - currPath.val);
	currPath.pop();
}