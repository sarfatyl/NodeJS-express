/*                 ''
    2       3         6        7
2 3 6 7  2 3 6 7  2 3 6 7  2 3 6 7
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
*/
function combinationSum(candidates: number[], target: number): number[][] {
	let res = [];
	// if we dont want duplicate nums in res
	// candidates.sort();
	dfsBackTracking(candidates,target, res, [],0);
	return res;
};

function dfsBackTracking(candidates,target, res, currCom, start) {

	if(0 > target) {
		return;
	}
	if(0 === target) {
		res.push([...currCom]);
	}
	for(let i = start ; i < candidates.length; i++) {
		currCom.push(candidates[i]);
		dfsBackTracking(candidates,target - candidates[i], res, currCom, i );
		currCom.pop();

	}
}
