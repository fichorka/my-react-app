var gulp = require ('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('src/stylesheets/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/'))
});
gulp.task('serve', ['sass'], function() {
	gulp.watch('src/stylesheets/*.scss', ['sass']);
})