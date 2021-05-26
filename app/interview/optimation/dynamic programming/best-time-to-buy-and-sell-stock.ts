function maxProfitF(prices) {
	if(!prices || !prices.length) {
		return 0;
	}
	let minPrice = Number.MAX_VALUE;
	let mixProfit = 0;
	for(let price of prices) {
		minPrice = Math.min(minPrice, price);
		mixProfit = Math.max(mixProfit, price - minPrice);
	}
}