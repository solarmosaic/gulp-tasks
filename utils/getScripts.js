var fs = require("fs");
var noop = require("./noop");
var onlyJavaScript = require("./isJavaScriptFile");
var path = require("path");

/**
 * util/getScripts.js
 *
 * Generates an object of modules given a directory of script files.
 */
module.exports = function(dir, cb) {
  var files = fs.readdirSync(dir).filter(onlyJavaScript);
  var scripts = {};

  cb = cb || noop;

  files.forEach(function(file) {
    var module = require(path.resolve(path.join(process.cwd(), dir, file)));
    var name = path.basename(file, path.extname(file));
    var modified = cb(module, name, file);
    scripts[name] = modified !== undefined ? modified : module;
  });

  return scripts;
};
