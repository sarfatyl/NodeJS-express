function dfs(startV) {
	let stack = [];
	let visited = new Set();
	stack.push(startV);
	visited.add(startV);
	while(stack) {
		let currentV = stack.pop();
		console.log('node with:', startV.value);
		currentV.edges.forEach(edge => {
			if(!visited.has(edge)) {
				stack.push(edge);
				visited.add(edge);
			}
		});
	}
}