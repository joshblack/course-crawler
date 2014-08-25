var jsdom = require('jsdom'),
    Promise = require('bluebird'),
    env = require('./env'),
    scripts = ['http://code.jquery.com/jquery.js'];

/* TODO: Establish error and reject handler */
module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    var departments = [],
        page = env(url, scripts);

    page.then(function($) {

      // Grab the menu and find the select options that show
      // each department.
      var menu = $('#soc_content td.soc_menu').first(),
          select = menu.children('select');
          
      // Problem selecting options of this select field, $('select option').length
      // is 0 for some reason.
      var options = $(select.html());

      options.each(function() {
        var val = $(this).val();

        if (val !== '') {
          departments.push(url + val);
        }
      });

      resolve(departments);
    }).error(reject);
  });
};