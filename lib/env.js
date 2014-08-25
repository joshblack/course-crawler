var jsdom = require('jsdom');
var Promise = require('bluebird');

module.exports = function(url, scripts) {
  return new Promise(function(resolve, reject) {

    // Build our JS DOM and return a jQuery instance of it.
    jsdom.env(url, scripts, function(err, window) {
      if (err) reject(err);

      resolve(window.$);
    });
  });
};