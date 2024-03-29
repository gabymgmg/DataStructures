function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function DLList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
    this.advance = advance;
    this.back = back;
    this.show = show;
}
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
    print(currNode.element);
    currNode = currNode.previous;
    }
}
function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
    currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {   
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function display() {
 var currNode = this.head;
 while (!(currNode.next == null)) {
 console.log(currNode.next.element);
 currNode = currNode.next;
 }
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function advance(n){
    var current=this.head
    var nSPaces = n
    while(nSPaces>0 && current.next!==null){
        current = current.next
        nSPaces--
    }
    return current.element
}
function back(n){
    var currentNode = this.findLast()
    while(n>0 && currentNode.previous!==null){
        currentNode=currentNode.previous
        n--
    }
    return currentNode.element
}
function show(){
    var currNode = this.head
    while(currNode.next!==null){
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}
module.exports={
    DLList
}