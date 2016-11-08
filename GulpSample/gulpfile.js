var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('copy', function() {
  return gulp.src('routes/*')
	.pipe(uglify())
    .pipe(gulp.dest('routes_copy/min.js'))
	;
});
gulp.task('automate', function() {
    gulp.watch(['routes/*'], ['copy']);
});
