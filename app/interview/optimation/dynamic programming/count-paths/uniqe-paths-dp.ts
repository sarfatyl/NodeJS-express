function uniquePathsDp(m,n) {
	if(m === 0 && n === 0 ) {
		return 0;
	}
	let dp = [];
	for(let i = 0; i < m; i++) {
		dp[i] = new Array(n);
	}
	for (let i = 0; i < m; i++) {
		dp[0][i] = 1;
	}
	for (let i = 0; i < n; i++) {
		dp[i][0] = 1;
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			dp[i][j] = dp[i-1][j] + dp[i][j-1];
		}
	}
	return dp[n-1][m-1]
 }

 // just n space
