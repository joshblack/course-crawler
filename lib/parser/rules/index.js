/**
 * In the current iteration of the Registrar we have the following data labels:
 * 
 * Course, CF, EEP, WM, GE, Sect, Cred, Day(s), Period, Bldg, Room, Exam, 
 * Course Title & Textbook(s), Instructors(s)
 *
 */
let Map = require('hashmap').HashMap;
let syntax = new Map();
let gordanRules = require('./gordan');
let genEdRules = require('./generalEducation');

syntax.set(0, function(courseData) {
    let $courseInfo = courseData.children('a').html();

    return {
        'courseCode': $courseCode.slice(0, 3),
        'courseNum': $courseCode.slice(3)
    };
});

syntax.set(1, function(courseData) {

});



module.exports = syntax;