"use strict";


var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
// var concatCss = require('gulp-concat-css');
var gulp = require('gulp');
// var autoprefixer = require('gulp-autoprefixer');


// server connect
gulp.task('connect', function() {
connect.server({
	root: 'app',
	livereload: true
});
});

// CSS
gulp.task('css', function(){
		gulp.src('verstka__2/css/*.css')
		.pipe(connect.reload());
})

// HTML
gulp.task('html', function(){
	gulp.src('verstka__2/index.html')
	.pipe(connect.reload());
})

// watch
gulp.task('watch', function(){
	gulp.watch('verstka__2/css/*.css', ['css'])
	gulp.watch('verstka__2/index.html', ['html'])
})

// default (don't WORK!!!)
gulp.task('default', function () {
  gulp.src('verstka__2/css/main.css')
    // .pipe(concatCss("css/bundle.css"))
    // .pipe(gulp.dest('css/'));

  //   .pipe(autoprefixer({
		// 	browsers: ['last 2 versions'],
		// 	cascade: false
		// }))
		// .pipe(gulp.dest('css/bundle.css'));

});


gulp.task('default', ['connect', 'css', 'html', 'watch']);