'use strict';

var courseParser = require('./courses');
var meetingsParser = require('./meetings');

module.exports = function(data, $, options) {
    let type = options.type;

    if (type === 'course') {
        return courseParser(data, $);
    } else {
        return meetingsParser(data, $);
    }
}