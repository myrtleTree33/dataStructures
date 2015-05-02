'use strict';

var _ = require('lodash'),
  nodes = require('./nodes');

var BinarySearchTree = function () {
  return this._init.apply(this, arguments);
};

BinarySearchTree.prototype._init = function (type, comparator) {
  this.type = type || 'LIST';
  var result = null;
  if (this.type === 'LIST') {
    result = new LinkedListBST(comparator);
  } else {
    // use an array
    // TODO implement
  }
  _.extend(result, this);
  return result;
};

var LinkedListBST = function () {
  this._init.apply(this, arguments);
};

LinkedListBST.prototype._init = function (comparator) {
  this.HEAD = null;
  this.comparator = comparator;
  this.length = 0;
};

LinkedListBST.prototype.insert = function (data) {
  var node = new nodes.Node(data, null, null);
  if (!this.HEAD) {
    this.HEAD = node;
    this.length++;
    return this;
  }
  var curr = this.HEAD,
    last = this.HEAD,
    result = 0;
  while (curr) {
    result = this.comparator(curr.data, node.data);
    last = curr;
    curr = (result <= 0) ? curr.left : curr.right;
  }
  if (!curr && result <= 0) {
    last.left = node;
  } else if (!curr && result > 0) {
    last.right = node;
  }
  this.length++;
};

/**
 * [traverse description]  Traverse a BST.
 * @param  {[type]}   type     [description] 'inorder', 'preorder' or 'postorder'.
 * @param  {Function} callback(arg) [description] If specified, executes a callback with the traversed array as the parameter.
 * @return {[type]}            [description] returns the array in blocking style.
 */
LinkedListBST.prototype.traverse = function (type, callback) {
  var result = [];

  var _preorder = function (result, node) {
    result.push(node.data);
    if (node.left) _preorder(result, node.left);
    if (node.right) _preorder(result, node.right);
  };

  var _inorder = function (result, node) {
    if (node.left) _inorder(result, node.left);
    result.push(node.data);
    if (node.right) _inorder(result, node.right);
  };

  var _postorder = function (result, node) {
    if (node.left) _postorder(result, node.left);
    if (node.right) _postorder(result, node.right);
    result.push(node.data);
  };

  if (type === 'preorder') {
    _preorder(result, this.HEAD);
  } else if (type === 'inorder') {
    _inorder(result, this.HEAD);
  } else if (type === 'postorder') {
    _postorder(result, this.HEAD);
  }

  if (callback) {
    callback(result);
  }

  return result;
};

LinkedListBST.prototype._findNode = function (data) {
  var curr = this.HEAD;
  while (curr) {
    var compVal = this.comparator(curr.data, data);
    if (compVal > 0 && curr.right) {
      curr = curr.right;
    } else if (compVal < 0 && curr.left) {
      curr = curr.left;
    } else if (compVal === 0) {
      return curr;
    } else {
      return null;
    }
  }
  return curr;
};

LinkedListBST.prototype.find = function (data, callback) {
  var result, curr;
  curr = this._findNode(data);
  result = curr ? curr.data : null;
  if (callback) {
    callback(result);
  }
  return result;
};

var ArrayBST = function () {

};

module.exports = BinarySearchTree;