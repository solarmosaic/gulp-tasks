// This stuff is just for testing purposes at the moment
// It should be cleaned up later when there are real tests

var cleanPublic = require("./task/clean")({
  glob: "public",
  scope: "public"
});

console.log(cleanPublic);
