let n, A;
for (let k = 1; k <= n; k++) {
	// generate the matrix k
	for (let i = 1; k <= n; k++) {
		for (let j = 1; j <= n; j++) {
			// @ts-ignore
			A[i,j] = Math.min(A[i,j] , A[i, k] + A[k,j]);
		}
	}
}