/**
 * Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, i
 */

function nextColsestTime(time) {
	if(!time || typeof time !== 'string') {
		throw new Error('The input must be a valid string format');
		//or return
	}
	let minutes = Number(time.substring(0,2)) * 60 + Number(time.substring(3));
	const set = new Set();
	for(let char of time) {
		set.add(Number(char));
	}

	while(true) {
		minutes = (minutes + 1)%(24*60);
		let newDigits = [minutes/60/10, minutes/60%10, minutes%60/10, minutes%60%10];
		let isValid = true;
		for(let digit of newDigits) {
			if(!set.has(digit)) {
				isValid = false;
			}
		}
		if(isValid) {
			return new String(`${minutes/60}:${minutes/10}`);
		}
	}

}

let time = "19:34";
console.log(nextColsestTime(time))