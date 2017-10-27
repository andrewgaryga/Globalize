var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Default task
gulp.task('default', ['sass']);

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'rap.test5'
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'sass'], function() {
  gulp.watch('scss/*.scss', ['sass']);
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
