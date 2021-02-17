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
    // create a new node item
    // check to see if the list is empty, insert a new item if so
    // start and the beginning until you reach the end of the list
    // set teh end node's next point to a new node of null
    
  // item can be inserted in the middle
}
