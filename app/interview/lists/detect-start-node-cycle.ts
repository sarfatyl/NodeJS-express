class ListNode3 {
	val: number;
	next: ListNode2 | null;

	constructor(val?: number, next?: ListNode2 | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}


function getStartCycle(head: ListNode3 | null): ListNode3 {
	let walker = head;
	let runner = head.next;

	while(walker && walker.next && walker != runner) {
		walker = walker.next;
		runner = runner.next.next;
	}
	// check if there is cycle
	if(runner) {
		walker = head;
		while (walker !== runner) {
			walker = walker.next;
			runner =	runner.next;
		}
		return walker;
	}
};