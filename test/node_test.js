'use strict';

var Node = require('../lib/nodes').Node, 
RBLNode = require('../lib/nodes').RBLNode,
RBLColor = require('../lib/nodes').RBLColor;
var assert = require('should');

describe('node', function () {
	describe('when instantiating', function () {
		it('should have left, right and data entries', function () {
			var n1 = new Node(20, null, null);
			n1.data.should.be.equal(20);
			// should(n1.left).be.null;
			// should(n1.right).be.null;

			// var n2 = new Node(50, n1, null);
			// n2.data.should.equal(50);
			// n2.left.should.equal(n1);
			// n2.right.should.be.null;

		});
	});
});

describe('RBL Node', function() {
	describe('when instantiating', function () {

		it('if color unspecified, have a color of red', function() {
			var n1 = new RBLNode('40', null, null);
			n1.color.should.equal(RBLColor.RED);
		});

		it('should have a settable color', function() {
			var n1 = new RBLNode('40', null, null, RBLColor.BLACK);
			n1.color.should.equal(RBLColor.BLACK);
		});

		it('should retain its base class properties', function() {
			var n1 = new RBLNode('40', null, null, RBLColor.RED);
			var n2 = new RBLNode('40', null, null, RBLColor.RED);
			var n3 = new RBLNode('40', n1, n2, RBLColor.BLACK);
			n3.left.should.equal(n1);
			n3.right.should.equal(n2);
		});
	});
});