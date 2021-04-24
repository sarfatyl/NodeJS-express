console.log(getMinStepsToOneIter(10000))

function getMinStepsToOneIter(n) {
	let table = [];
	table[1] = 0;

	for(let i = 1; i < n; i++) {
		table[i+1] = table[i+1] ? Math.min(table[i+1], table[i] + 1) : table[i] + 1;
		if(i * 2 <= n) {
			table[i*2] = table[i*2] ? Math.min(table[i*2], table[i] + 1): table[i] + 1;
		}
		if(i * 3 <= n) {
			table[i*3] = table[i*3] ?Math.min(table[i*3], table[i] + 1): table[i] + 1;
		}
	}
	return table[n];
}