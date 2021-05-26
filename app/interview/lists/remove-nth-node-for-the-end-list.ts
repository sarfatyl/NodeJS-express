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
class ListNode1 {
	val: number;
	next: ListNode1 | null;

	constructor(val?: number, next?: ListNode1 | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

function removeNthFromEnd(head: ListNode1 | null, n: number): ListNode1 | null {
	let dummy = new ListNode1(0);
	dummy.next = head;
	let walker = dummy;
	let runner = dummy;

	// send the runner forward n+1 steps
	for (let i = 0; i < n + 1; i++) {
		runner = runner.next;
	}
	// loop through the list until runner gets the end
	while (runner !== null) {
		runner = runner.next;
		walker = walker.next;
	}
	// check if
	if (walker && walker.next) {
		walker.next = walker.next.next;
	}
	return dummy.next;
}