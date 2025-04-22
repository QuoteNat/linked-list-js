export class Node {
  #value = null;
  #next = null;
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  set(value) {
    this.value = value;
  }
}

export class List {
  head = null;
  tail = null;

  constructor() {
    this.head = new Node();
    this.tail = this.head;
  }

  append(value) {
    let newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    while (currentNode.next !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string += `( ${currentNode.value} ) -> `;
    string += "null";
    return string;
  }

  prepend(value) {
    let newHead = new Node(value, this.head);
    this.head = newHead;
  }
}
