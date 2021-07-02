const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");

exports.default = function script(cb) {
  gulp.src("src/js/main.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/js"))
  return cb()
}