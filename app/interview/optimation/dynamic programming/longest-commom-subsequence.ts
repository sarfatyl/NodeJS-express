function LSC(str1, str2) {
	let dp = [];

	for(let i = 1; i <= str1.length; i++) {
		for(let j = 1; j <= str2.length; j++) {
			if(str1[i-1] === str2[j-1]) {
				dp[i][j] = 1 + dp[i-1][j-1];
			}else {
				dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
			}
		}
	}
	return dp[str1.length][str2.length];
}