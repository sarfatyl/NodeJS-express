/**
 *    1
    \
     3
    / \
   2   4
        \
         5
 ==> 3-4-5
 */

function longest(root) {
	let max = [1]; // global max
	let count = 0; // recursion call count
	let target = root.val;
	helper(root, count,target,max);
	return max[0];
}

function helper(root, count, target, max) {
	if(!root) {
		return;
	}
	if(root.val === target) {
		count ++;
	}else  {
		count = 1;
	}
	max[0] = Math.max(max[0], count);
	helper(root.left, count, root.val +1, max);
	helper(root.right, count, root.val + 1, max);
}