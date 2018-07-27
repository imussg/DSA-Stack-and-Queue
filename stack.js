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
	let starTrek = new Stack();
	starTrek.push('Kirk');
	starTrek.push('Spock');
	starTrek.push('McCoy');
	starTrek.push('Scotty');

	console.log(starTrek.display());
	starTrek.pop();
	starTrek.pop();
	starTrek.push('Scotty');
	console.log('+++++ New starTrek Stack ++++++++++++++++++++');
	console.log(starTrek.display());

	console.log(is_palindrome("dad"));
	console.log(is_palindrome("A man, a plan, a canal: Panama"));
	console.log(is_palindrome("1001"));
	console.log(is_palindrome("Tauhida"));
}

main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();
    let str1 = "", str2 = "";
    let iter = 0;
    while(iter < s.length) {
    	str1 += s[iter];
    	stack.push(s[iter]);
    	iter++;
    }
    iter = 0;
    while(iter < s.length) {
    	str2 += stack.pop().data;
    	iter++;
    }
    if(str1 === str2) {
    	return true;
    } else {
    	return false;
    }
}