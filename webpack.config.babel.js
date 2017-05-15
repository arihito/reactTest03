export default {
	// 出力先のファイル名
	output: {
		filename: 'react.js',

	},
	// エラー時の行番号を表示
	devtool: 'source-map',
	module: {
		loaders: [
			{
				// バンドルする外部ファイルの拡張子を正規表現で指定
				test: /\.jsx?$/,
				loader: 'babel-loader',
				// 除外フォルダ
				exclude: [/node_modules/],
			},
		],
	},
	// import時の拡張子が無い場合jsかjsxで解釈
	resolve: {
		extensions: ['', '.js','.jsx'],
	},
};
