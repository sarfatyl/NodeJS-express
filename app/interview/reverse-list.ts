


function reverseList(head) {
	if(!head || !head.next) {
		return head;
	}
	let p = head.next();
	let q = p.next();

	head.next = null;
	while (q) {
		p.next = head;
		head = p;
		p = q;
		q = q.next;
	}
	p.next = head;
	return p;
}