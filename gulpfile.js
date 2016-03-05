'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require("path");

var config = {
    src: 'src/',
    dist: 'web/'
};

gulp.task('sass', function () {
    return gulp.src(path.resolve(config.src,  'sass/*.scss'))
        .pipe(sass({
            includePaths: [
                path.resolve(config.src, "sass"),
                path.resolve("bower_components"),
                path.resolve("bower_components/material-design-lite/src"),
                path.resolve("bower_components/compass-mixins/lib"),
            ]
        }).on('error', sass.logError))
        .pipe(gulp.dest(path.resolve(config.dist, 'css')));
});

gulp.task('sass:watch', function () {
    gulp.watch(path.resolve(config.src,  'sass/**/*.scss'), ['sass']);
});
