/**
 * partition list around input n
 * list 1 representing the list with element that less than n
 * list 2 representing the list with element greater than n or equals to n
 * ***** pseudo code *****
 * 1. init l1, l2 to be pointing to the start of list1, list2 responsively and to be equals to dummy node
 * 2. init e1, e2 to be pointing to the end of list1, list2 responsively and to be equals to dummy node
 * 3. loop through the input list with pointer p
 * 	3.1 if p less than n
 * 		3.1.1 update e1.next to be p
 * 	3.2 else
 * 		3.2.1 update e2.next to be p
 * 4. update e2 to pointing null
 * 5. update e1.next to pointing l2.next(dummy start)
 * 6. return l1.next
 *
 *
 *
 */