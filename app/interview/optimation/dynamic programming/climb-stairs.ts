let subSolution = [];
subSolution[0] = 1;
subSolution[1] = 1;

// RECURSIVE APPROACH
function climbStairs(n, subSolution) {
	if(subSolution[n]) return subSolution[n];
	subSolution[n] = climbStairs(n-1, subSolution) + climbStairs(n-2, subSolution);
	return subSolution[n];
}
//ITERATIVE APPROACH
function climbStairsI(n) {
	let subSolution = [];
	subSolution[0] = 1;
	subSolution[1] = 1;
	for(let i = 2; i <= n; i++) {
		subSolution[i] = subSolution[i-1] + subSolution[i-2];
	}
	return subSolution[n];
}