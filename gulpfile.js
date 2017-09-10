var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
//allows you to write css without vendor prefixes (needs postcss)
autoprefixer = require('autoprefixer'),
//can create variables in css
cssvars = require('postcss-simple-vars'),
//use nested css structure
nested = require('postcss-nested');


gulp.task('default', function(){
  console.log("done");
})

gulp.task('html', function(){
  console.log("done html")
})

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
})


gulp.task('watch', function() {
  watch('./app/index.html', function(){
    gulp.start('html');
  })

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })
})
