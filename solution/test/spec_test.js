var expect = require("chai").expect;

var num1 = 2;
var num2 = 3;

describe("Testing Mocha and Chai", function() {
	it("Should add 2 and 3 together", function(done) {
		expect(num1 + num2).equal(5);
		done();
	});

	// it("Should fail", function(done) {
	// 	expect(num1 + num2).equal(10);
	// 	done();
	// });
});