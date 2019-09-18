var gulp = require('gulp')
var uglify = require('gulp-uglify')

/* 压缩js文件 */
gulp.task('pressJs', function () {
  console.log('开始js文件压缩');
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});
