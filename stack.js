class Stack {
	
	constructor() {
		this.top = null;
	}

	push(data) {
		this.top = new _Node(data, this.top);
	}

	pop() {
		if(this.top === null) {
			return null;
		}
		let temp = this.top;
		this.top = this.top.next;
		return temp;
	}

	peek() {
		return this.top.data;
	}

	display() {
		let iter = this.top.next;
		let str = this.top.data;
		while(iter !== null) {
			str += "\n" + iter.data;
			iter = iter.next;
		}
		return str;
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

	console.log(stack.display());
}

main();