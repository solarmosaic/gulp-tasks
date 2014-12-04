var del = require("del");

/**
 * Removes files and/or folders matching the glob.
 *
 * @param {String} options.glob Glob pattern to match
 * @param {String} [options.name] Postfix :name
 */
module.exports = function(gulp, options) {
  var name = "clean" + (options.name ? ":" + options.name : "");
  gulp.task(name, function(cb) {
    del(options.glob, cb);
  });
};
