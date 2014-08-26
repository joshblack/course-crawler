let Map = require('hashmap').HashMap;
var types = new Map();

types.set(2, 'Writing Requirement');
types.set(4, 'Writing Requirement');
types.set(6, 'Writing Requirement');
types.set('M', 'Math Requirement');
types.set('N', 'Math Requirement');

module.exports = types;