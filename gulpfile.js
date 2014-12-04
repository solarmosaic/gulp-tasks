// This stuff is just for testing purposes at the moment
// It should be cleaned up later when there are real tests
var gulp = require("gulp");
var tasks = require("./index");

gulp.task("clean", tasks.clean({ glob: "public" }));
