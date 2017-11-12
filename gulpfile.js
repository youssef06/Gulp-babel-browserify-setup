const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('babel', () =>
	gulp.src('js/src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('js/babelified'))
);

gulp.task('browserify', ['babel'],() => {
	gulp.src('js/babelified/**/*.js')
                .pipe(browserify({
                    insertGlobals : true,
                    debug : true 
                }))
                .pipe(gulp.dest('js/dist'))
});

gulp.task('default', ['babel', 'browserify']);
