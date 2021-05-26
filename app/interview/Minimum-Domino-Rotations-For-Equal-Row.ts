/**
 * Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

function minDominoRotations(A,B) {
	let minRotation = Number.MAX_VALUE;
	// we have 4 option to rotations - A[0], B[0]
	if(helper(A, B, A[0]) > -1) {
		minRotation = Math.min(minRotation, helper(A, B, A[0]));
	}
	if(helper(A, B, B[0]) > -1) {
		minRotation = Math.min(minRotation, helper(A, B, B[0]));
	}
	if(helper(B, A, B[0]) > -1) {
		minRotation = Math.min(minRotation, helper(B, A, B[0]));
	}
	if(helper(B, A, A[0]) > -1) {
		minRotation = Math.min(minRotation, helper(B, A, A[0]));
	}
	return minRotation === Number.MAX_VALUE ? -1 : minRotation;
}

function helper(A, B, value) {
	let minRotation= 0;
	for(let i = 0; i < A.length; i++) {
		if (A[i] !== value) {
			if (B[i] === value) {
				minRotation++;
			} else {
				return -1;
			}
		}
	}
	return minRotation;
}