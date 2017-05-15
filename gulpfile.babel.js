import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';
import { exec } from 'child_process';

// パスを2回以上繰り返さないためオブジェクトにまとめて管理
const paths = {
	allSrcJs: 'src/**/*.js?(x)',
	jsDir: 'js',
};

// ビルド失敗時に過去データの同期を防ぐため毎回削除(推奨処理)
gulp.task('clean', () => {
	return del(paths.jsDir);
});

// babelでトランスパイルしlibフォルダにjsファイルを生成
gulp.task('build', ['clean'], () => {
	return gulp.src(paths.allSrcJs)
	// .pipe(babel())
	.pipe(webpack(webpackConfig))
	.pipe(gulp.dest(paths.jsDir));
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
