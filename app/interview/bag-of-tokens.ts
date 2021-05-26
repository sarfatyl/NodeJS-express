/**
 * Input: tokens = [100,200,300,400], P = 200
Output: 2
Explanation: Play the tokens in this order to get a score of 2:
1. Play the 0th token (100) face up, your power becomes 100 and score becomes 1.
2. Play the 3rd token (400) face down, your power becomes 500 and score becomes 0.
3. Play the 1st token (200) face up, your power becomes 300 and score becomes 1.
4. Play the 2nd token (300) face up, your power becomes 0 and score becomes 2.
 */

const tokens = [100,200,300,400], P = 200;
console.log(computeMaxPoints(tokens, P));

function computeMaxPoints(tokens, p) {
	if(p === 0 || typeof p !== 'number' || (!tokens.length && p > 0)) {
		 return 0;
	}
	tokens.sort();
	let maxPoint = 0;
	let i = 0;
	let j = 0;
	let currPoints = 0;
	while (i <= j) {
		if(p >= tokens[i]) {
			currPoints ++;
			p -= tokens[i++];
			maxPoint = Math.max(maxPoint, currPoints);
		}else if(currPoints > 0) {
			currPoints --;
			p += tokens[j++];
		}else {
			return maxPoint;
		}
	}
	return maxPoint;
}