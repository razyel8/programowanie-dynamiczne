var gulp = require('gulp'),
    includeSources = require("gulp-include-source"),
    watch = require('gulp-watch'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean');;

gulp.task('watch', function () {
    return gulp.src('components/**/*.js')
        .pipe(watch('components/**/*.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('bower', function () {
    console.log("bower function start");
    var sources = gulp.src(['./components/**/*.js', './css/*.css'], {read: false});
    return gulp.src('./index.html')
        .pipe(wiredep.stream({
            fileTypes: {
                html: {
                    replace: {
                        js: function (filePath) {
                            return '<script src="' + 'lib/js/' + filePath.split('/').pop() + '"></script>';
                        },
                        css: function (filePath) {
                            return '<link rel="stylesheet" href="' + 'lib/css/' + filePath.split('/').pop() + '"/>';
                        }
                    }
                }
            }
        }))
        .pipe(inject(sources, {
            relative: true
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('copy-js', function () {
    return gulp.src(wiredep().js)
        .pipe(gulp.dest('./public/lib/js'));
});

gulp.task('copy-css', function () {
    return gulp.src(wiredep().css)
        .pipe(gulp.dest('./public/lib/css'));
});

gulp.task('copy-mine', function () {
    gulp.src(['./img/**/*']).pipe(gulp.dest('./public/img'));
    gulp.src(['./templates/**/*']).pipe(gulp.dest('./public/templates'));
    gulp.src(['./components/**/*']).pipe(gulp.dest('./public/components'));
    gulp.src(['./css/**/*']).pipe(gulp.dest('./public/css'));
    gulp.src(['app.js']).pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch(['./components/**/*', './components/*', './templates/**/*', './templates/*' ,'./css/**/*', 'index.html', 'app.js'], ['default']);
});

gulp.task('clean', function () {
    return gulp.src('./public/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['copy-js','copy-css','copy-mine', 'bower']);