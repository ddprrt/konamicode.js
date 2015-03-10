'use strict';

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    jshint  = require('gulp-jshint'),
    uglify  = require('gulp-jshint');

function buildScripts(src, intermediate, dest) {
    return function() {
        gulp.src(src)
            .pipe(concat(intermediate))
            .pipe(uglify())
            .pipe(gulp.dest(dest));
    }
}

gulp.task('test', function() {
    return gulp.src(['src/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});


gulp.task('build-jquery', ['test'], buildScripts(
    ['src/konamicode.js','src/konamicode.jquery.js'],
    'konamicode.jquery.min.js',
    'build'
));

gulp.task('build-min', ['test'], buildScripts(
    ['src/konamicode.js'],
    'konamicode.min.js',
    'build'
));

gulp.task('default', ['build-min', 'build-jquery']);
