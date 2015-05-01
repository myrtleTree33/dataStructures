'use strict';

var _ = require('lodash');

/**
 * Creates a new Node.
 */
var Node = function () {
  this._init.apply(this, arguments);
};

Node.prototype._init = function (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

/**
 * Creates a new RBL Node.
 */

var RBLColor = {
  BLACK: true,
  RED: false
};

var RBLNode = function () {
  this._init.apply(this, arguments);
};

RBLNode.prototype._init = function (data, left, right, color) {
  var base = new Node(data, left, right); // superclass
  _.extend(this, base);
  this.color = color || RBLColor.RED;
};

module.exports = {
  Node: Node,
  RBLNode: RBLNode,
  RBLColor: RBLColor
};
