var _ = require("lodash");
var gulp = require("gulp");

var dataJson = require("gulp-data-json");
var dataMatter = require("gulp-data-matter");
var hb = require("../utils/hb");
var htmltidy = require("gulp-htmltidy");
var nav = require("gulp-nav");
var prettyUrl = require("gulp-pretty-url");

/**
 * Generates a static site using Handlebars and data generated from
 * front matter, .json companion files and gulp-nav.
 *
 * @param {String} options.dest The path to write files to (output folder)
 * @param {String} options.hb.helpers Glob pattern matching Handlebars helper files
 * @param {String} options.hb.partials Glob pattern matching Handlebars partial files
 * @param {String} options.src Glob pattern matching view files to compile
 * @param {Object} [options.htmltidy] Options to pass into htmltidy
 */
module.exports = function(options) {
  options = _.extend({
    htmltidy: {
      // indent lines by 2 spaces
      indent: true,
      // don't wrap lines
      wrap: 0
    }
  });

  return function() {
    return gulp.src(options.src)
      .pipe(dataJson())
      .pipe(dataMatter())
      .pipe(prettyUrl())
      .pipe(nav())
      .pipe(hb(options.hb))
      .pipe(htmltidy(options.htmltidy))
      .pipe(gulp.dest(options.dest));
  };
};
