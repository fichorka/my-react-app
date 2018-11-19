var gulp = require ('gulp');
var sass = require('gulp-sass');
var wait = require ('gulp-wait');

gulp.task('sass', function() {
	gulp.src('src/stylesheets/app.scss')
		.pipe(wait(100))
		.pipe(sass())
		.pipe(gulp.dest('src/'))
});
gulp.task('serve', ['sass'], function() {
	gulp.watch('src/stylesheets/*.scss', ['sass']);
})