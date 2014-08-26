let Map = require('hashmap').HashMap;
let types = new Map();

types.set('B', 'Biological Sciences');
types.set('C', 'Composition');
types.set('D', 'Diversity');
types.set('H', 'Humanities');
types.set('I', 'International / Diversity');
types.set('N', 'International');
types.set('M', 'Mathematics');
types.set('P', 'Physical Sciences');
types.set('S', 'Social and Behavioral');
types.set('*', 'Please refer to course description for Gen Ed designations');

module.exports = types;
