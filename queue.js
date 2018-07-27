class _Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.first=null;
    this.last=null;
  }

  enqueue(data) {

    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }

  dequeque() {
    
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

}

const peek = queue => {
  return queue.first.value;
};

const display = queue => {
  while (queue.first !== null) {
    return queue.dequeue();
  }
};

const main = () =>  {

  let starTrek = new Queue();
  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Uhura');
  starTrek.enqueue('Sulu');
  starTrek.enqueue('Chekov');

console.log(display(starTrek));
console.log(peek(starTrek));

};

main();





