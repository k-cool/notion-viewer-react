const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const babelOptions = {
	presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
};

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? 'hidden-source-map' : 'eval',
	cache: true,

	entry: './src/index.tsx',
	output: {
		filename: '[name].[chunkhash].js',
		path: path.join(__dirname, 'dist'),
	},

	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'], // 어디서 resolve를 적용할지 지정
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // 생략가능한 확장자 설정
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions,
					},
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions,
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
		],
	},

	plugins: [
		new webpack.ProvidePlugin({ React: 'react' }),
		new CleanWebpackPlugin(), // output으로 지정된 경로의 모든 파일을 빌드하기 전에 비워준다
		new HtmlWebpackPlugin({ template: './public/index.html' }), // 빌드할 때마다 바뀌는 js 이름을 반영하여 html에 연결시켜준다
	],

	devServer: {
		port: 3000,
		historyApiFallback: true,
		open: true,
		static: path.join(__dirname, '.src/public'),
	},
};
