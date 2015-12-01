var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('copy_compiled_resource', function() {
   gulp.src('./node_modules/calcite-bootstrap/dist/css/*.css' )
   .pipe(gulp.dest('./node_modules/calcite-bootstrap/node_modules/bootstrap-sass/assets/'));
});