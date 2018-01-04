const gulp = require('gulp'),
      babel = require('gulp-babel'),
      browserify = require('gulp-browserify'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      htmlreplace = require('gulp-html-replace'),
      webserver = require('gulp-webserver');

var src = './src',
    app = './build/app';

gulp.task('js', () => {
  return gulp.src(src + '/index.js')
    .pipe(babel({
      compact: true,
      presets: ['es2015', 'react','stage-2']
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(browserify({
      transform: 'babelify',
      debug: true
    }))
    .pipe(gulp.dest('./build/app/js'));
});

// gulp.task('react', () => {
//   gulp.src( src + '/**/*.js');
// });

gulp.task('html', () => {
  gulp.src( app + '/**/*.html');
});

gulp.task('css', () => {
  gulp.src( app + '/css/*.css');
});
//
// gulp.task('react', () => {
//   return gulp.src( src + '/*.js')
//     .pipe(require('gulp-reactify')({
//       reactTools: require('reactTools')
//     }));

 gulp.task('watch', () => {
   gulp.watch( src + '**/*.js', ['js']);
   gulp.watch( src + '/Components/*.js', ['js']);
   gulp.watch( app + '/css/**/*.css', ['css']);
   gulp.watch( app + '/**/*.html', ['html']);
 });

gulp.task('webserver', () => {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});
//
// gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
gulp.task('default', ['watch', 'webserver', 'js']);
