const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let underlyingList;

    return !this.length ? underlyingList = new ListNode(null) : underlyingList = this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);  

    if (!this.length) {  //if queue is empty
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    
    return this.length++;
  }

  dequeue() {
    let deletedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
