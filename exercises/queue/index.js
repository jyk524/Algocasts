// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }
  // adding to front of queue
  add(q) {
    this.queue.unshift(q);
  }
  // remove from queue
  remove() {
    const q = this.queue.pop();
    return q;
  }
}

module.exports = Queue;
