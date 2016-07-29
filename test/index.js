var should = require('should');
var itoa = require('../');

describe('itoa', function() {
	describe('input types', function() {
		it('should handle string inputs', function() {
			itoa('12').should.equal('twelve');
		});
		it('should handle number inputs', function() {
			itoa(12).should.equal('twelve');
		});
		it('should handle hex inputs (using bignumber.js)', function() {
			itoa('0x10').should.equal('sixteen');
		});
	});

	describe('special cases', function() {
		it('should handle zero', function() {
			itoa('0').should.equal('zero');
		});
		it('should handle negatives', function() {
			itoa('-27').should.equal('negative twenty seven');
		});
	});

	describe('triples', function() {
		it('should handle one-digit numbers', function() {
			itoa('6').should.equal('six');
		});
		it('should handle two-digit numbers like nineteen', function() {
			itoa('19').should.equal('nineteen');
		});
		it('should handle two-digit numbers like thirty six', function() {
			itoa('36').should.equal('thirty six');
		});
		it('should handle two-digit numbers with a zero in the ones place', function() {
			itoa('40').should.equal('forty');
		});
		it('should handle three-digit numbers', function() {
			itoa('274').should.equal('two hundred seventy four');
		});
		it('should handle three-digit numbers with a zero in the tens place', function() {
			itoa('204').should.equal('two hundred four');
		});
		it('should handle three-digit numbers with a zero in the tens and ones place', function() {
			itoa('200').should.equal('two hundred');
		});
	});

	describe('big numbers', function() {
		it('should handle numbers with more than 3 digits', function() {
			itoa('14021').should.equal('fourteen thousand twenty one');
		});
		it('should handle numbers with segments of zeroes', function() {
			itoa('12000001').should.equal('twelve million one');
		});
	});

	describe('using "and"', function() {
		it('should not insert "and" when requested but uneeded', function() {
			itoa('1', true).should.equal('one');
		});
		it('should not insert "and" when requested but uneeded', function() {
			itoa('12', true).should.equal('twelve');
		});
		it('should insert "and" when requested', function() {
			itoa('112', true).should.equal('one hundred and twelve');
		});
		it('should insert "and" when requested in long numbers', function() {
			itoa('12000001', true).should.equal('twelve million and one');
		});
	});
});
