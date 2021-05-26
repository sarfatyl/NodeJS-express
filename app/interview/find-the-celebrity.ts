/**
 * api knows(i, j) return true if i knows j
 * high level pseudo code
 * 1. init the first element(0) to be the candidate
 * 2. loop through the number
 * 	2.1 check if candidate knows i
 * 	 2.1.1 if yes, change candidate to be i
 *
 * 3. loop through all the elements(0-n)
 *  3.1 check if candidate != i && candidate doesnt knows i
 *  3.1 check if i knows candidate
 *  3.1.1 if not, return -1
 *
 * 4. return candidate
 */

function findTheCelebrity(n: number) : number {
	let candidate: number = 0;

	for(let i = 1; i < n; i++) {
		if(knows(candidate, i)) {
			candidate = i;
		}
	}
	for(let i = 0; i < n; i++) {
		if((candidate !== i && knows(candidate, i)) ||
				!knows(i, candidate)) {
			return -1;
		}
	}
	return candidate;
}

function knows(i,j): boolean {
	return true;
}