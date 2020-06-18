'use strict'

const gulp = require("gulp"),
      sass = require("gulp-sass"),
      concat = require("gulp-concat"),
      autoprefixer = require('gulp-autoprefixer');

let css = function(done) {
    gulp.src("src/scss/main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(gulp.dest("public/css/"));
    done();
};

let js = function(done) {
    gulp.src("src/js/libs/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("public/js/"));
    done();
};


exports.build = gulp.series(css, js);

gulp.watch("src/scss/**/*.scss", exports.build);
