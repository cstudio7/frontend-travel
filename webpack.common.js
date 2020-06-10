module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'images',
					},
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	  },
	  node: {fs: 'empty'}
};
