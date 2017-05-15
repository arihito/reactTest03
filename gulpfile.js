const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;

// パスを2回以上繰り返さないためオブジェクトにまとめて管理
const paths = {
	allSrcJs: 'src/**/*.js',
	libDir: 'lib',
};

// ビルド失敗時に過去データの同期を防ぐため毎回削除(推奨処理)
gulp.task('clean', () => {
	return del(paths.libDir);
});

// babelでトランスパイルしlibフォルダにjsファイルを生成
gulp.task('build', ['clean'], () => {
	return gulp.src(paths.allSrcJs)
	.pipe(babel())
	.pipe(gulp.dest(paths.libDir));
});

// shellScriptのexecコマンドでrootのindex.htmlをオープン
gulp.task('open', ['build'], (callback) => {
  exec(`open index.html`, (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

// gulpで実行
gulp.task('default', ['open']);
