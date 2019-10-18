const { src, dest, parallel, series } = require("gulp");

const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

function style() {
  return src("src/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        format: "beautify"
      })
    )
    .pipe(dest("dist"));
}

function styleMin() {
  return src("src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

exports.style = style;
exports.styleMin = styleMin;

exports.default = parallel(style, styleMin);
