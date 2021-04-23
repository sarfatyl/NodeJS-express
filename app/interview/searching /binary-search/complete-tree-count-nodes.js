class TreeNode{
	constructor(val, left = undefined, right = undefined) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
let four = new TreeNode(4);
let two = new TreeNode(1,four);
let three = new TreeNode(1);
let one = new TreeNode(1,two,three);


console.log(countNodes(one));


function countNodes(root) {
	if(!root) return 0;
	let d = computeDepth(root);
	// if the tree contains just one node
	if(d==0) return 1;
	let left = 1, right = Math.pow(2,d) - 1;
	let mid;
	while(left <= right) {
		mid = left + Math.floor((right-left)/2);
		if(exists(mid,d, root)){
			left = mid + 1;
		}else {
			right = mid - 1;
		}
	}
	return Math.pow(2,d)-1 + left;
}


function exists(idx, d, node) {
	let left = 0, right = Math.pow(2, d)-1;
	let mid;
	for(let i = 0; i < d; i++) {
		mid = left + Math.floor((right - left)/2);
		if(idx <= mid) {
			node = node.left;
			right = mid ;
		}else {
			node = node.right;
			left = mid + 1;
		}
	}
	return node !== undefined;

}


function computeDepth(node) {
	let d = 0;
	while(node.left) {
		node = node.left;
		++d;
	}
	return d;
}