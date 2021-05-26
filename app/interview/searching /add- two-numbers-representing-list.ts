
/**
 * Definition for singly-linked list.
 class ListNode {
   val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }
 * pseudo code
 * init result pointer ans result iteration
 * init two pointer for lists input
 * check edge cases like null list
 *  loop through the lists in parallel
    compute the sum of the node with the carry
        if the sum >= 10
        sum = sum % 10
        carry = true;
   if(carry) {
    add new listNode with value 1
   }
 */
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val);
		this.next = (next===undefined ? null : next);
	}
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let p1:ListNode = l1;
	let p2:ListNode = l2;

	let resultHead:ListNode = new ListNode(0);
	let resultIterate:ListNode = resultHead;

	let carry: boolean = false;

	while(p1 != null || p1 != null ) {
		let sum = 0;
		if(p2 == null) {
			sum += p1.val;
			p1 = p1.next;
		}else if(p1 == null) {
			sum += p2.val;
			p2 = p2.next;
		}else {
			sum += p1.val + p2.val;
			p1 = p1.next;
			p2 = p2.next;
		}
		if(carry) {
			sum +=1;
		}
		if(sum >= 10) {
			sum %= 10;
			carry = true;
		}else {
			carry = false;
		}

		resultIterate.next = new ListNode(sum);
		resultIterate = resultIterate.next;
	}
	if(carry) {
		resultIterate.next = new ListNode(1);

	}

	return resultHead.next;

};