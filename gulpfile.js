var gulp = require('gulp')
var uglify = require('gulp-uglify')
var px2rem = require('gulp-px2rem-plugin')
// 引入浏览器刷新插件
let browserSync = require('browser-sync').create();

var less = require('gulp-less')

/* px 转化为 rem */
// gulp.task('px2rem', function () {
//   console.log('开始rem转化');
  
//   gulp.src('./src/css/*.css')
//   .pipe(px2rem({'width_design':720,'valid_num':4,'pieces':10}))
//   // .pipe(gulp.dest('dist/css'))
//   .pipe(gulp.dest('E:/代码仓库/united_h5/css'))
// });

/* 压缩js文件 */
gulp.task('default', function () {
  console.log('开始js文件压缩');
  gulp.src('srec/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('copyHtml', function(){    
  return gulp.src('src/html/*.html')        
    .pipe(gulp.dest('F:/代码仓库/united_h5')) // 将源文件拷贝到打包目录
});

// 编译less
gulp.task('less', function () {
  // 1. 找到 less 文件
  gulp.src('src/less/*.less')
  // 2. 编译为css
      .pipe(less())
  // 3. 将css中px转化为rem 
      .pipe(px2rem({'width_design':720,'valid_num':4,'pieces':10}))
  // 4. 另存文件
      .pipe(gulp.dest('F:/代码仓库/united_h5/css'))
});

gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: 'F:/代码仓库/united_h5' // 指定项目文件夹
      }
  })
  gulp.watch('./src/**/*.*',['less','copyHtml']).on('change', browserSync.reload);
});

