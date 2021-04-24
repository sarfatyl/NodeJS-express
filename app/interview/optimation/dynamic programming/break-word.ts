let dic = ['dog', 'do', 'form'];

function canBreakToWords(str, dic) {
	let dp: boolean[] = [];
	dp[0] = true;

	for(let i = 0; i < str.length; i++) {
		for(let j = 0; j < i; j++) {
			if(dp[j] && dic.contain(str.substring(i,j))) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[str.length];
}