'use strict';

var Promise = require('bluebird');
var baseURL = process.argv[3] || 'http://registrar.ufl.edu/soc/201408/all/';
var builder = require('./lib/departments')(baseURL);
var env = require('./lib/env');
var courses = require('./lib/courses');

/* TODO */
// Commit each new department that we parse to a database

// Get all the departments currently in the registrar
builder.then(function(depts) {

    // depts.forEach(function(e) {
    //     var page = env(e, ['http://code.jquery.com/jquery.js']);
    //     // once we grab the page parse it's contents
    //     var data = courses(page);
    //     // get course information
    //     // save course information
    // });

    // Get the page corresponding to the department URL
    var page = env(depts[0], ['http://code.jquery.com/jquery.js']);

    page.then(function($) {
        // Get the data for the corresponding page instance
        return courses($);
    }).then(function(data) {
        console.log('DB Commit:' + data);    
    });
});

// builder.then(function(depts) {
//     depts.forEach(function(e) {
//         var page = env(e, ['http://code.jquery.com/jquery.js']);

//         page.then(function($) {
//             return courses($);
//         }).then(function(data) {
//             return db.store(data);   
//         });
//     });    
// });