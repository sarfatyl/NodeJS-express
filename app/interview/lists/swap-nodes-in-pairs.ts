/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode2 {
	val: number;
	next: ListNode2 | null;

	constructor(val?: number, next?: ListNode2 | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

function swapPairs(head: ListNode2 | null): ListNode2 | null {
	let dummy = new ListNode2(0);
	dummy.next = head;
	let lastPointer = dummy;
	let firstP = dummy.next;
	let secondP = firstP.next;

	while (firstP && secondP) {
		firstP.next = secondP.next;
		secondP.next = firstP;
		lastPointer.next = secondP;

		lastPointer = firstP;
		firstP = firstP.next;
		secondP = firstP.next.next;
	}
	return dummy.next;
}