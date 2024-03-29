function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.remove = remove;
    this.removeNode = removeNode;
    this.find = find;
    this.update = update;
    this.getMax = getMax;
    this.getMin = getMin;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        process.stdout.write(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        (node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        process.stdout.write(node.show() + " ");
    }
}

function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
function find(data) {
    var current = this.root;
    if (current == null) {
        return null
    }
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

module.exports = {
    Node,
    BST
}