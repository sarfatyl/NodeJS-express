/**
1. init result
2. perform dfs
    2.2 loop through input

3.return result
 **/

// [[1],[]]
// [0,1]
function allPathsSourceTarget(graph: number[][]): number[][] {
	let res = [];
	let currPath = [];
	currPath.push(0);
	dfs(graph, res, currPath, 0);
	return res;
};
function dfs(graph, res, currPath, index) {
	if(index === graph.length - 1) {
		res.push([...currPath]);
		return;
	}
	let adj = graph[index];
	for(let i = 0; i < adj.length; i++) {
		currPath.push(adj[i]);
		dfs(graph, res, currPath, adj[i]);
		currPath.pop();
	}

}