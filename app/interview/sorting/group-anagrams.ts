let groupAnagrams = ['eat', 'ate', 'sas','aas', 'gg'];
console.log(groupedAnagrams(groupAnagrams));

/**
 * 1. loop through each string in the array
 * 1.1 sort the string
 * time complexity  O(n*klogk)
 * space complexity O(n)
 * @param groupAnagrams
 */
function groupedAnagrams(groupAnagrams) {
	let anagramMap = new Map();
	let result = [];

	for(let str of groupAnagrams) {
		let charArray = str.split('').sort();
		let sortedStr = charArray.join('');
		if(!anagramMap.has(charArray.join(''))) {
			let list = new Array();
			anagramMap.set(sortedStr, list);
			result.push(list);
		}
		anagramMap.get(sortedStr).push(str);
	}
	return result;
}