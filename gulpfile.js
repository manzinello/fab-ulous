const { src, dest, parallel, series } = require("gulp");

const rename = require("gulp-rename");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const replace = require("gulp-replace");
const uglify = require("gulp-uglify");

const fs = require("fs");

const babel = require("gulp-babel");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

let version = require("./package.json").version;

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

function js() {
  let cssMinContent = fs.readFileSync("dist/github-fabulous.min.css", "utf8");
  return src("src/*.js")
    .pipe(replace("GITHUB_FABULOUS_VERSION", version))
    .pipe(replace("GITHUB_FABULOUS_STYLE", cssMinContent))
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(dest("dist"));
}

exports.js = js;
exports.style = style;

exports.default = series(style, js);
