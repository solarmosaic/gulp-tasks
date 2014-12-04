/**
 * Constructs a task name.
 *
 * @param {String} name The task name
 * @param {String} [scope] An optional name to scope by
 */
module.exports = function(name, scope) {
  return name + (scope ? ":" + scope : "");
};
