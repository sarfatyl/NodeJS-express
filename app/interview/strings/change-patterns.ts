const str1 = 'Hi, my name is {first-name} {last-name}, i love my {family} , my hobby is {hobby}';
const patternMap = new Map();
patternMap.set('first-name', 'Linoy');
patternMap.set('last-name', 'Tzarfty');
patternMap.set('family', '{first-name}');
patternMap.set('hobby', 'surfing');

const caching = new Map();
//
// lastIndexOf
// indexOf
// variable

console.log(generateNewString(str1, patternMap,caching));

function generateNewString(str, patternMap,caching) {
	if(typeof str !== 'string' || !(patternMap instanceof Map)) {
		return 'the input must be [string, Map]';
	}
	if(!patternMap.size || !str.length || str.length < 3) {
		return str;
	}
	if(caching.has(str)) {
		return caching.get(str);
	}
	if(!hasPattern(str)) {
		return str;
	}
	let splitString = str.split(' ');
	let res = [];
	for(let i = 0; i < splitString.length; i++) {
		let currStr = splitString[i];
		if(currStr[0] === '{' && (currStr[currStr.length - 1] === '}' || currStr[currStr.length - 2] === '}')) {
			let vari =  patternMap.get(currStr.substring(1, currStr.length - 1)) || patternMap.get(currStr.substring(1, currStr.length - 2))
			let newStr = generateNewString(vari, patternMap, caching);
			caching.set(vari, newStr);
			res.push(newStr);
		}else {
			res.push(currStr);
		}
	}
	return res.join(' ');
}
function hasPattern(str) {
	let splitString = str.split(' ');
	for(let i = 0; i < splitString.length; i++) {
		let currStr = splitString[i];
		if (currStr[0] === '{' && (currStr[currStr.length - 1] === '}' || currStr[currStr.length - 2] === '}')) {
			return true;
		}
	}
	return false;
}