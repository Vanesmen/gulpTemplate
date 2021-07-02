const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const cleanCSS = require('gulp-clean-css');
const gulpStylelint = require('gulp-stylelint');
const plumber = require("gulp-plumber");

module.exports = function styles() {
  return gulp.src("src/styles/*.sass")
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(cleanCSS())
    .pipe(gulp.dest("build/css"))
}
