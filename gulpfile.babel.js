import gulp from 'gulp';
import mocha from 'gulp-mocha';


import 'babel-polyfill';

gulp.task('default',['']);
gulp.task('test', ['test-server']);
gulp.task('test-server', () => {
  return gulp.src(['__test__/server/*-spec.js'])
    .pipe(mocha({reporter: 'spec'}));
});
