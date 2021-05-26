/**
 * We will use a stack and traverse the tree in pre-order fashion and store
 * all the visiting nodes in the stack,
 * when we visit the leaf node print the elements of the stack and then empty it after that.
 * @param data
 * @constructor
 * Time complexity: O(n). where n is the number of nodes in the tree.
Space complexity: O(n).
 */



// A class to store a binary tree node
function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}



// Function to check if a given node is a leaf node or not
const isLeaf = (node) => {
	return (node.left == null && node.right == null);
}

// Recursive function to find paths from the root node to every leaf node
const printRootToleafPaths = (node, path) => {
	// base case
	if (node == null) {
		return;
	}

	// include the current node to the path
	path.push(node.data);

	// if a leaf node is found, print the path
	if (isLeaf(node)) {
		console.log(path);
	}

	// recur for the left and right subtree
	printRootToleafPaths(node.left, path);
	printRootToleafPaths(node.right, path);

	// remove the current node after the left, and right subtree are done
	path.pop();
};