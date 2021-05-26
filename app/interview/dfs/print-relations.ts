
class Relation {
	parent;
	child;
	constructor( parent,  child) {
		this.parent = parent;
		this.child = child;
	}
}
const r1 = new Relation('1','2');
const r2 = new Relation('1','3');
const r3 = new Relation('3','4');

const relations = [];
relations.push(r1);
relations.push(r2);
relations.push(r3);
printRelations(relations);

function printRelations(relations) {
	/**
	 * pseudo-code
	 * 1. setup data-structure to store the relation where we can do depth first search
	 * 2. loop through the relations and put all parents as keys pointing their children
	 * 3.	find the root - the node without parent (same iteration on 2 add all the children to Set data structure)
	 * 4. preform DFS on the new data structure - starting at thr root to keep the depth for print the exact tab
	 *
	 */
	const relationsMap = new Map();
	const children= new Set();

	// 1. loop through relations and put the parent as keys pointing to the children array as a value
	// 2. store all the children on set to find the root
	relations.forEach((relation) => {
		if(!relationsMap.has(relation.parent)) {
			relationsMap.set(relation.parent, []);
		}
		relationsMap.get(relation.parent).push(relation.child);
		children.add(relation.child);
	});
	// find the root - the key that is not in the children set
	let root;
	for(let parent of relationsMap.keys()) {
		if (!children.has(parent)) {
			root = parent;
			break;
		}
	}
	if(!root) {
		return 'The relations must have a root';
	}
	// perform DFS on map and print the relations with the tabs
	dfs(root,relationsMap);

}
function dfs(root, relationsMap) {
	let stack = [];
	stack.push({
		value: root,
		level: 0,
	});
	while(stack.length) {
		let str = '';
		let current = stack.pop();
		for(let i = 0; i < current.level; i++) {
			str += '\t';
		}
		console.log(str + current.value);
		if(relationsMap.has(current.value)) {
			relationsMap.get(current.value).forEach(child => {
				stack.push({
					value: child,
					level: current.level + 1,
				});
			});
		}
	}
}