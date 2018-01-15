/*css gulp task*/
const gulp = require('gulp');
// 浏览器热更新
const livereload = require('gulp-livereload');
// 创建默认任务
// 即运行gulp便执行的任务
gulp.task('css', () => {
	return gulp.src('src/css/**/*.css')
		.pipe(gulp.dest('server/webroot/css'))
		.pipe(livereload());
});