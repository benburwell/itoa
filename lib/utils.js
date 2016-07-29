function atoi(str) {
	return parseInt(str, 10);
};

function chunkify(str) {
  var parts = [];
  var offset = 0;
  var length = str.length % 3 || 3;
  while (offset < str.length) {
    parts.push(str.substring(offset, offset + length));
    offset += length;
    length = 3;
  }
  return parts;
}

module.exports = {
	atoi: atoi,
	chunkify: chunkify,
};
