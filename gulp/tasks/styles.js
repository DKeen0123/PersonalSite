var gulp = require('gulp'),
postcss = require('gulp-postcss'),
//allows you to write css without vendor prefixes (needs postcss)
autoprefixer = require('autoprefixer'),
//can create variables in css
cssvars = require('postcss-simple-vars'),
//use nested css structure
nested = require('postcss-nested'),
//can modulate css - import all in to main style sheet
cssImport = require('postcss-import');

//Runs all postcss and generates compiled style sheet
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
