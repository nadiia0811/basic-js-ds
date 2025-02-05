const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNumber = null;
  }

  root() {
    return this.rootNumber;
  }

  add(data) {

   function addNumber(node, data) {
     if (!node) {
      return new Node(data);
     }

     data > node.data ? 
     node.right = addNumber(node.right, data) : 
     node.left = addNumber(node.left, data);

     return node;
   }

   return this.rootNumber = addNumber(this.rootNumber, data);
  }

  has(data) {
    function searchNumber(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data > node.data) {
        return searchNumber(node.right, data);
      } else {
        return searchNumber(node.left, data);
      }
    }

    return searchNumber(this.rootNumber, data);
  }

  find(data) {
    function findNumber(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data > node.data) {
        return findNumber(node.right, data);
      } else {
        return findNumber(node.left, data);
      }
    }

    return findNumber(this.rootNumber, data);
  }
 

  min() {
    let minNode = this.rootNumber;

    while (minNode.left) {
      minNode = minNode.left;
    }

    return !this.rootNumber ? null : minNode.data;
  }

  max() {
    let maxNode = this.rootNumber;
    
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return !this.rootNumber ? null : maxNode.data;
  }

  remove(data) {
    function removeNumber(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        node.right = removeNumber(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNumber(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
  
        let minRight = node.right;
  
        while (minRight.left) {
          minRight = minRight.left;
        }
  
        node.data = minRight.data;
        node.right = removeNumber(node.right, minRight.data);
  
        return node;
      }
    }
  
    return this.rootNumber = removeNumber(this.rootNumber, data);
  }
}




module.exports = {
  BinarySearchTree
};