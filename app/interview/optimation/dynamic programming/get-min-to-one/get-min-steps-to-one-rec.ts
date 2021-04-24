// recursion -  top down
function getMinStepsToOneWrapper(n) {
	return getMinStepsToOneRec(n, new Map());
}

function getMinStepsToOneRec(n, dp) {
	if(dp.has(n)) {
		return dp.get(n);
	}
	if(n === 1) {
		return 0;
	}
	let minAns = getMinStepsToOneRec(n-1, dp);
	if(n % 2 === 0) {
		minAns = Math.min(minAns, getMinStepsToOneRec(n/2, dp));
	}
	if(n % 3 === 0) {
		minAns = Math.min(minAns, getMinStepsToOneRec(n/3, dp));
	}
	dp.set(n, minAns + 1);
	return dp.get(n);
}

console.log('n : ', getMinStepsToOneWrapper(100000));