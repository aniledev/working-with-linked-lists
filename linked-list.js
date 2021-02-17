class LinkedList {
  constructor() {
    // head indicates the beginning of the list which happens to be empty
    this.head = null;
  }

  // item can be inserted at the beginning
  insertFirst(item) {
    // create a new node item and point the head to that new code
    this.head = new _Node(item, this.head);
  }

  // item can be inserted at the end
  insertLast(item) {
    // check to see if the list is empty, insert a new item if so
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      // start and the beginning until you reach the end of the list
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // set the end node's next point to a new node of null
      tempNode.next = new _Node(item, null);
    }
  }

  // item can be inserted in the middle

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty return null
    if (!this.head) {
      return null;
    }
    // Check for the item as long as the item is not found
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it when currNode.value === item
    return currNode;
  }
}
