var path = require("path");

/**
 * utils/isJavaScriptFile.js
 *
 * @param {String} filename File name
 * @returns {Boolean} Whether or not the file is a JavaScript file
 */
module.exports = function(filename) {
  return /(\.js$)/i.test(path.extname(filename));
};
