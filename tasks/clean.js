var del = require("del");

/**
 * Removes files and/or folders matching the glob.
 *
 * @param {String} options.glob Glob pattern to match
 */
module.exports = function(options) {
  return function(cb) {
    del(options.glob, cb);
  };
};
