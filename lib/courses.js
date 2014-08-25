'use strict';

var parse = require('./parser');

// Use the page instance to parse the input for data
module.exports = function($) {
    // Get the rows that contain course information on that page
    let rows = $('#soc_content > center tr'),
        options = {
            'type': 'course'
        };

    return parse(rows, $, options);
};