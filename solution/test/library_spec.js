var Library = require("../library.js");
var expect = require("chai").expect;

describe("Testing our library functionality", function() {
	it("Should successfully add a book", function(done) {
		var myLib = new Library();

		myLib.add("Arun's Book");

		expect(myLib.all().length).equal(1);
		done();
	});

	it("Should return the correct book", function(done) {
		var myLib = new Library();

		myLib.add("Arun's Book");

		var bookReturned = myLib.show(1);

		expect(bookReturned.book).equal("Arun's Book");
		expect(bookReturned.id).equal(1);

		done();
	});

	it("Should remove a book", function(finished) {
		var myLib = new Library();

		myLib.add("Arun's Book");

		myLib.remove(1);

		expect(myLib.all().length).equal(0);

		finished();
	});
});








