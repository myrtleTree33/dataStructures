'use strict';

var assert = require('should'),
  _ = require('lodash'),
  nodes = require('../lib/nodes'),
  BinarySearchTree = require('../lib/BinarySearchTree');

var comparator = function (data1, data2) {
  return data2 - data1;
};

describe('binary search tree', function () {

  describe('when instantiating', function () {

    it('can instantiate a linked list by default', function () {
      var tree = new BinarySearchTree(null, comparator);
    });

  });

  describe('when inserting', function () {

    it('should insert successfully', function () {
      var tree = new BinarySearchTree(null, comparator);
      tree.insert(20);
      tree.insert(40);
      tree.insert(60);
      tree.insert(2);
      tree.insert(8);
      tree.insert(6);
      tree.length.should.equal(6);
    });
  });

  describe('when traversing', function () {
    var tree = new BinarySearchTree(null, comparator);
    tree.insert(20);
    tree.insert(40);
    tree.insert(35);
    tree.insert(45);
    tree.insert(42);
    tree.insert(80);
    tree.insert(17);
    tree.insert(15);
    tree.insert(19);
    tree.insert(10);
    tree.insert(18);
    tree.insert(16);

    it('can traverse preorder', function () {
      var result = _.difference(
        [20, 17, 15, 10, 16, 19, 18, 40, 35, 45, 42, 80],
        tree.traverse('preorder'));
      result.length.should.equal(0);
    });

    it('can traverse inorder', function () {
      var result = _.difference(
        [10, 15, 16, 17, 18, 19, 20, 35, 40, 42, 45, 80],
        tree.traverse('inorder'));
      result.length.should.equal(0);
    });

    it('can traverse postorder', function () {
      var result = _.difference(
        [10, 16, 15, 18, 19, 17, 35, 42, 80, 45, 40, 20],
        tree.traverse('postorder'));
      result.length.should.equal(0);
    });

    it('can be called asynchronously', function (done) {
      tree.traverse('postorder', function (arr) {
        var result = _.difference(
          [10, 16, 15, 18, 19, 17, 35, 42, 80, 45,
            40, 20
          ], arr);
        result.length.should.equal(0);
        done();
      });
    });

  });
});