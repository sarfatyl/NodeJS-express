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

function partition(head: ListNode1 | null, x: number): ListNode1 | null {
	let dummy1 = new ListNode2(0);
	let head1 = dummy1;
	let tail1 = dummy1;
	let dummy2 = new ListNode2(0);
	let head2 = dummy2;
	let tail2 = dummy2;
	let runner = head;

	while (runner) {
		if (runner.val < x) {
			tail1.next = runner;
			tail1 = tail1.next;
		} else {
			tail2.next = runner;
			return tail2 = tail2.next;
		}
		runner = runner.next;
	}
	tail2.next = null;
	tail1.next = head2.next;
	return head1.next;
}