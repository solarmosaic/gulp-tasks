# gulp-tasks

The purpose of this repository is to allow several applications to easily share gulp tasks. At some future point, some
of the tasks in this repository may be split into separate repositories.

## Install

`npm install --save-dev mosaic-gulp-tasks`

## Example

To use a task from this repository, for example the `clean` task, simply require `gulp` and `mosaic-gulp-tasks` and then
define your task like so:

```javascript
var gulp = require("gulp");
var tasks = require("mosaic-gulp-tasks");

// Clean the build folder in preperation of a new build
gulp.task("clean", tasks.clean({
  glob: "public"
}));
```

## Development

To setup your development environment, run:

`npm install`

All task definitions should accept an `options` object and return a function. For example:

```javascript
module.exports = function(options) {
  return function(cb) {
    del(options.glob, cb);
  };
};

```

The function that is returned will be used by [`gulp.task`](https://github.com/gulpjs/gulp/blob/master/docs/API.md#fn).

## TODO

- Add tests

## License

MIT
