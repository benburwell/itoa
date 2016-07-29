var multipliers = require('./lib/multipliers.js');
var digits = require('./lib/digits.js');
var utils = require('./lib/utils.js');
var BigNum = require('bignumber.js');

function parseTriple(str, useAnd, hasBigger) {
  var hundredsDigit = 0;
  var tensDigit = 0;
  var onesDigit = 0;
  var bottomPair = 0;
  if (str.length === 3) {
    hundredsDigit = utils.atoi(str[0]);
    tensDigit = utils.atoi(str[1]);
    onesDigit = utils.atoi(str[2]);
    bottomPair = utils.atoi(str.substring(1, 3));
  } else if (str.length === 2) {
    tensDigit = utils.atoi(str[0]);
    onesDigit = utils.atoi(str[1]);
    bottomPair = utils.atoi(str);
  } else if (str.length === 1) {
    onesDigit = utils.atoi(str[0]);
    bottomPair = onesDigit;
  }
  var parts = [];
  if (hundredsDigit > 0 && digits.hasOwnProperty(hundredsDigit)) {
    parts.push(digits[hundredsDigit]);
    parts.push('hundred');
  }
	if (hundredsDigit > 0) {
		hasBigger = true;
	}
  if (hasBigger && bottomPair > 0 && useAnd) {
    parts.push('and');
  }
  if (bottomPair > 0 && digits.hasOwnProperty(bottomPair)) {
    parts.push(digits[bottomPair]);
  } else {
    if (tensDigit > 0 && digits.hasOwnProperty(tensDigit * 10)) {
      parts.push(digits[tensDigit * 10]);
    }
    if (onesDigit > 0 && digits.hasOwnProperty(onesDigit)) {
      parts.push(digits[onesDigit]);
    }
  }
  return parts;
};

function numToAlpha(input, useAnd) {
	var bn = new BigNum(input).toString(10);
  var parts = [];
  var numString = bn;
  if (bn[0] === '-') {
    parts.push('negative');
    numString = bn.substring(1, bn.length);
  }
  if (numString === '0') {
    parts.push('zero');
  } else {
    var chunks = utils.chunkify(numString);
    chunks.forEach(function(chunk, idx) {
      var mult = chunks.length - idx - 1;
      var useAndForChunk = useAnd && mult === 0;
			var triple = parseTriple(chunk, useAndForChunk, chunks.length > 1);
			if (triple.length > 0) {
				Array.prototype.push.apply(parts, triple);
				if (multipliers.hasOwnProperty(mult)) {
					parts.push(multipliers[mult]);
				}
			}
    });
  }
  return parts.join(' ');
};

module.exports = numToAlpha;
