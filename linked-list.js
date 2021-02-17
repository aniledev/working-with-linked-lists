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
  // item can be inserted in the middle
}
