/**
 * evaluate expression result
 * example: input -> ['1','2','3','*','+']
 * pseudo code:
 *  1.setup an empty stack
 *  2.loop through each string in the input as str
 *  	2.1 case str is an operand:
 *  		2.1.1	pop two elements from the stack and evaluate the res
 *  		2.1.2 push the res to stack
 *  	2.2 case str is not an operand:
 *  		2.2.1 push parsed number to stack
 */
let tokenArr: string[] = ['1','2','3','*','+'];

console.log(evaluateExpression(tokenArr));

class Stack {
	private items;
	constructor() {
		this.items = [];
	}
	pop() {
		if(!this.items.length) {
			return this.items.pop();
		}else {
			throw new Error('The stack is empty');
		}
	}
	push(x: number) {
		this.items.push(x);
	}
}

function evaluateExpression(arr: string[]): number {
	let stack = new Stack();
	let v1, v2;
	tokenArr.forEach(token => {
		switch(token) {
		case '+':
			stack.push(stack.pop() + stack.pop());
			break;
		case '*':
			stack.push(stack.pop() * stack.pop());
			break;
		case '-':
			v1 = stack.pop();
			v2 = stack.pop();
			stack.push( v2 - v1 );
			break;
		case '/':
			v1 = stack.pop();ee
			v2 = stack.pop();
			stack.push( v2 / v1 );
			break;
		default:
			stack.push(Number(token));
		}

	});
	return stack.pop();
}