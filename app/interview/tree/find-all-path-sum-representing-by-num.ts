
/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers.
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function sumNumbers(root: TreeNode | null): number {
	let ret = [];
	let currPath = [];
	let sum = 0;
	sumNumbersRec(root,ret,currPath, sum)
	console.log(ret)
	ret.forEach(path => sum += Number(path.join('')))
	return sum
}

function sumNumbersRec(root,ret,currPath, sum) {
	if(root === null) {
		return;
	}
	currPath.push(root.val);
	if(root.left === null && root.right === null) {
		ret.push([...currPath]);
	}
	sumNumbersRec(root.left, ret,currPath, sum);
	sumNumbersRec(root.right, ret,currPath, sum);
	currPath.pop();

}