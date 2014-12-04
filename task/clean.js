var del = require("del");
var gulp = require("gulp");
var taskName = require("../util/taskName");

/**
 * Removes files and/or folders matching the glob.
 *
 * @param {String} options.glob Glob pattern to match
 * @param {String} [options.name] Postfix :name
 */
module.exports = function(options) {
  var name = taskName("clean", options.scope);

  gulp.task(name, function(cb) {
    del(options.glob, cb);
  });

  return name;
};
