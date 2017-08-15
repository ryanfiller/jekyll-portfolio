var gulp        = require('gulp');
var shell       = require('gulp-shell');
var stylus      = require('gulp-stylus');
var data        = require('gulp-data');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');

var browserSync = require('browser-sync');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-serve', shell.task(['bundle exec jekyll serve']));

gulp.task('jekyll-build', shell.task(['bundle exec jekyll build']));

gulp.task('stylus-build', function(){
    return gulp.src('./assets/_stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

// gulp.task('stylus-watch', shell.task(['stylus -w ./assets/_stylus/main.styl -o ./assets/css']));

gulp.task('stylus-watch', function () {
    gulp.watch(['./assets/_stylus/**/*.styl', './assets/_stylus/*.styl'], ['stylus-build']);
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: '_site'
//         }
//     });
// });

gulp.task('default', ['jekyll-serve', 'stylus-build', 'stylus-watch']);
