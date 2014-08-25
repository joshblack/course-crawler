'use strict';

/**
 * In the current iteration of the Registrar we have the following data labels:
 * 
 * Course, CF, EEP, WM, GE, Sect, Cred, Day(s), Period, Bldg, Room, Exam, 
 * Course Title & Textbook(s), Instructors(s)
 *
 */
let courseData = [];

let gordanRules = {
    2: 'Writing Requirement',
    4: 'Writing Requirement',
    6: 'Writing Requirement',
    'M': 'Math Requirement',
    'N': 'Not Gordan Rule'
};

let genEdTypes = {
    'B': 'Biological Sciences',
    'C': 'Composition',
    'D': 'Diversity',
    'H': 'Humanities',
    'I': 'International / Diversity',
    'N': 'International',
    'M': 'Mathematics',
    'P': 'Physical Sciences',
    'S': 'Social and Behavioral',
    '*': 'Please refer to course description for Gen Ed designations'
};

let syntaxRules = {

};

module.exports = function($courseRows, $) {
    $courseRows.each(function() {
        let $this = $(this),
            $courseData = $this.children('td');

        if (!$courseData.length) {
            return true;
        }

        $courseData.each(function() {

        });
       
    });

    return "success";
};

/**
 * Build a new Course with the appropriate information set
 */
function Course() {
    /**
     * The title of the course
     * @type {String}
     */
    this.course = 'Course Title';

    /**
     * Course fees
     * @type {Number}
     */
    this.cf = 0;

    /**
     * Employment Education Program
     * @type {Boolean}
     */
    this.eep = false;

    /**
     * Writing and Math Requirement (Gordan Rules)
     * @type {Object}
     */
    this.wr = {
        'data': null,
        'type': null
    };

    /**
     * General Education Requirement
     * @type {Array}
     */
    this.ge = [];

    /**
     * Section Number for the Course
     * @type {String}
     */
    this.section = "";

    /**
     * How many credits the course is worth
     * @type {Number}
     */
    this.credits = 0;

    /**
     * Meeting Days for the course
     * @type {Array}
     */
    this.days = [];

    /**
     * Class Periods that the course meets
     * @type {Array}
     */
    this.period = [];

    /**
     * The building the course is located in
     * @type {String}
     */
    this.building = "";

    /**
     * The room number for the course
     * @type {String}
     */
    this.room = "";

    /**
     * Exam Group Code
     * @type {String}
     */
    this.examCode = "";

    /**
     * The title of the course
     * @type {String}
     */
    this.title = "";

    /**
     * The instructors for the course
     * @type {Array}
     */
    this.instructors = [];

    for (let n in arguments[0]) {
        this[n] = arguments[0][n];
    }
};