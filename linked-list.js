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

  /**
   * Returns the node at index
   * @param {*} index
   * @returns The node at index. If index is out of bounds null will be returned.
   */
  at(index) {
    if (index == 0) return this.head;
    if (index < 0) return null;
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  /**
   * Removes the last element in the list
   * @returns The last element in the list
   */
  pop() {
    let lastNode = null;
    let currentNode = this.head;

    while (currentNode.next !== null) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = lastNode;
    lastNode.next = null;
    return currentNode;
  }
}
