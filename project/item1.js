var gulp = require('gulp')
var uglify = require('gulp-uglify')
var px2rem = require('gulp-px2rem-plugin')
// 引入浏览器刷新插件
var browserSync = require('browser-sync').create();
var proxy = require('http-proxy-middleware')
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
gulp.task('pressJs', function () {
  console.log('开始js文件压缩');
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

gulp.task('copyJs', function(){    
  return gulp.src('src/js/testEval.js')        
    .pipe(gulp.dest('E:/代码仓库/united_h5/js')) // 将源文件拷贝到打包目录
});
//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('copyHtml', ['copyJs'], function(){    
  return gulp.src('src/html/*.html')        
    .pipe(gulp.dest('E:/代码仓库/united_h5')) // 将源文件拷贝到打包目录
});

// 编译less
gulp.task('less', function () {
  // 1. 找到 less 文件
  gulp.src('src/less/*.less')
  // 2. 编译为css
      .pipe(less())
  // 3. 将css中px转化为rem 
      .pipe(px2rem({'width_design':750,'valid_num':4,'pieces':10,'ignore_px':[1,2]}))
  // 4. 另存文件
      .pipe(gulp.dest('E:/代码仓库/united_h5/css'))
});

gulp.task('server', function() {
  var jsonPlaceholderProxy = proxy('/api',{
    target: 'https://test.iconntech.com',
    changeOrigin: true,
    pathRewrite: {
     '^/api': ''
    }
  })
  browserSync.init({
      server: {
          baseDir: 'E:/代码仓库/united_h5', // 指定项目文件夹
          middleware: [jsonPlaceholderProxy]
      }
  })
  gulp.watch('./src/**/*.*',['less','copyHtml']).on('change', browserSync.reload);
  // gulp.watch('E:/代码仓库/united_h5/**/*.*').on('change', browserSync.reload);
});

