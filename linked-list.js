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

  /**
   * Returns the current size of the list
   */
  size() {
    let counter = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return counter;
  }

  /**
   *
   * @returns The head node of the list
   */
  get head() {
    return this.head;
  }

  /**
   *
   * @returns The tail node of the list.
   */
  get tail() {
    return this.tail;
  }
}
