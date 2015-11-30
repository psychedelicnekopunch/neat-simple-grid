var gulp   = require('gulp');
var sass   = require('gulp-sass');

gulp.task('default', function()
{
	gulp.src('sass/style.scss')
		.pipe(sass({
			// includePaths : [require("bourbon").includePaths],
			// [outputStyle] Type: String Default: nested Values: nested, expanded, compact, compressed
			// outputStyle  : 'compressed',
		}))
		.pipe(gulp.dest('./demo/css/'));
});