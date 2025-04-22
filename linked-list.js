export class Node {
  #value = null;
  #next = null;
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
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

  /**
   * Returns whether value is contained within the list
   * @param {*} value
   * @returns Boolean
   */
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
   * Return the index of the first instance of value in the list or null if it isn't
   * @param {*} value
   * @returns Boolean
   */
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index += 1;
    }
    return null;
  }

  insertAt(value, index) {
    let lastNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      // Return null if index out of bounds
      if (currentNode === null) return null;
      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    let newNode = new Node(value, currentNode);
    lastNode.next = newNode;
  }

  removeAt(index) {
    let lastNode = null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      // Return null if index out of bounds
      if (currentNode === null) return null;
      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    lastNode.next = currentNode.next;
  }
}
