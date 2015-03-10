'use strict';

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    jshint  = require('gulp-jshint'),
    uglify  = require('gulp-jshint');

gulp.task('test', function() {
    return gulp.src(['src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
