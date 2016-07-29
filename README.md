# itoa

a javascript library for converting numbers to their names

[![Build Status](https://travis-ci.org/benburwell/itoa.svg?branch=master)](https://travis-ci.org/benburwell/itoa)
[![npm version](https://badge.fury.io/js/iota.svg)](https://badge.fury.io/js/itoa)

# usage

```javascript
var itoa = require('itoa');
console.log(itoa(42)); // => 'forty two'
console.log(itoa('11233440')); // => 'eleven million two hundred thirty three thousand four hundred forty'
```

specify `true` as the second parameter to get an "and" in there:

```javascript
console.log(itoa('101')); // => 'one hundred one'
console.log(itoa('101', true)); // => 'one hundred and one'
```

the number will be parsed with [bignumber.js][], so you can use whatever format is supported.

# supported node versions

each release is tested against the latest patch of every minor version of node.js released since 0.10. see the `.travis.yml` file for specifics, and be sure to check the [latest build results](https://travis-ci.org/benburwell/itoa)

# contributing

bug reports, features requests, and patches are all welcome. [create an issue](https://github.com/benburwell/itoa/issues/new), or [fork the repo and make a pull request back from your feature branch](https://guides.github.com/introduction/flow/).

[bignumber.js]: https://github.com/MikeMcl/bignumber.js

