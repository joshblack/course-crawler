let syntax = require('./rules');
let courseData = [];

module.exports = function($courses, $) {
    // Filter our given rows to get rid of anything we don't want to work with
    $courses.filter(function() {
        let $this = $(this),
            dataCells = $this.children('td').length,
            semesterHeader = $this.children('th').html();

        // If we have <td> cells or it contains Summer term information we're good to go
        return dataCells || semesterHeader.trim().toLowerCase().contains('summer');

    }).each(function() {
        let props = [];

        var data = $(this).children('td').each(function(index) {
            if (index === 0) {
                console.log($(this).html());
                console.log(syntax.get(index)($(this).html()));

                // props.push(syntax.get(index)($(this).html()));            
            }
        });
    });

    return "success";
};

/**
 * Build a new Course with the appropriate information set
 */
function Course() {
    /**
     * The course code
     * @type {String}
     */
    this.courseCode = '';

    /**
     * The course number
     * @type {String}
     */
    this.courseNum = '';

    /**
     * Course fees
     * @type {String}
     */
    this.cf = '';

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