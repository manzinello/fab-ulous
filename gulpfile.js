const { src, dest, parallel, series } = require("gulp");

const rename = require("gulp-rename");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

function style() {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

exports.style = style;

exports.default = series(style);
