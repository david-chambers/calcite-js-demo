var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('copy_compiled_resource', function() {
   gulp.src('./node_modules/calcite-bootstrap/dist/css/*.css' )
   .pipe(gulp.dest('./node_modules/calcite-bootstrap/node_modules/bootstrap-sass/assets/'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
