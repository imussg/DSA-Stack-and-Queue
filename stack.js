class Stack {
	
	constructor() {
		this.top = null;
	}

	push(data) {
		this.top = new _Node(data, this.top);
	}

	pop() {
		let temp = this.top;
		this.top = this.top.next;
		return temp;
	}
}

class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

function main() {
	let stack = new Stack();
	stack.push(5);
	stack.push(3);

	console.log(stack.pop());
}

main();