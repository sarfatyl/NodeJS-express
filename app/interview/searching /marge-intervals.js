/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 Example 1:

 Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 Output: [[1,6],[8,10],[15,18]]
 Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */
var merge = function(intervals) {
	intervals.sort((a,b) => {
		return a[0]-b[0];
	});
	let merged = [];
	for(let interval of intervals) {
		let lastMarged = merged[merged.length-1];
		if(merged.length === 0) {
			merged.push(interval);
		}else if (interval[0] > lastMarged[1]) {
			merged.push(interval);
		}
		else {
			lastMarged[1] = Math.max(lastMarged[1], interval[1]);
		}

	}
	return merged;
};