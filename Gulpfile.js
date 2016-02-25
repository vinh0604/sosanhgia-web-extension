var gulp = require('gulp');
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('js', function () {
  gulp.src('src/main.js')
      .pipe(sourcemaps.init())
      .pipe(jspm())
      .pipe(rename('bundle.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/'));
  gulp.src('src/background.js')
      .pipe(sourcemaps.init())
      .pipe(jspm())
      .pipe(rename('background_bundle.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('js:watch', function () {
  gulp.watch('src/**/*.js', ['js']);
});


gulp.task('sass', function () {
  gulp.src('stylesheets/main.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('stylesheets/**/*.scss', ['sass']);
});

gulp.task('copy', function () {
  gulp.src(['*images/**/*',
        '*fonts/**/*',
        'index.html',
        'index.js',
        'background.js',
        'jspm_packages/system.js',
        'config.js',
        'manifest.json'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['js:watch', 'sass:watch']);
gulp.task('default', ['js', 'sass', 'copy']);

