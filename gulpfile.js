const gulp = require("gulp");
const clean = require("./gulp/tasks/clean");
const fonts = require("./gulp/tasks/fonts");
const imageMinify = require("./gulp/tasks/imageMinify");
const pug2html = require("./gulp/tasks/pug2html");
const { default: script } = require("./gulp/tasks/script");
const styles = require("./gulp/tasks/styles");
const svgSprite = require("./gulp/tasks/svgSprite");


module.exports.start = gulp.series(clean, pug2html, styles, script, fonts, imageMinify, svgSprite);