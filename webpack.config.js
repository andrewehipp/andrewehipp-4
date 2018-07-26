const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const project = require('./package.json').project;


module.exports = {
    entry: `${project.src.js}/main.js`,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, '/'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'env',
                                'react',
                            ],
                            plugins: [
                                'transform-object-assign',
                                'transform-es2015-destructuring',
                                'transform-object-rest-spread',
                                'syntax-dynamic-import',
                            ],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true,
                            publicPath: 'dist/',
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //   // you can specify a publicPath here
                        //   // by default it use publicPath in webpackOptions.output
                        //   publicPath: '../'
                        // }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // Minifcation via cssnano http://cssnano.co/guides/
                            // minimize: true,
                            // Ignore urls in stylesheets
                            url: false,
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer(),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'prerender-loader?string',
            //         },
            //     ],
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
        modules: [
            'node_modules',
            path.resolve(__dirname, project.src.js),
            // path.resolve(__dirname, project.src.scss),
        ],
    },
    plugins: [

        // Sass through webpack. Requires `import style from '../scss/global.scss'`
        // in the main bundle.
        new MiniCssExtractPlugin({
            filename: 'css/global.css',
        }),

        new StyleLintPlugin({
            configFile: '.stylelintrc',
            failOnError: false,
            quiet: false,
            syntax: 'scss',
        }),

        // Significant improvement in how fast the JavaScript evaluates in the browser
        // https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b#c11e
        new webpack.optimize.ModuleConcatenationPlugin(),

        // BrowserSync will start only when you run Webpack in watch mode
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            ghostMode: false,
            host: 'localhost',
            server: {
                baseDir: './dist/',
            },
            port: 8000,
        }),

        new HtmlWebpackPlugin({
            template: 'templates/index.html',
        }),
        // Duplicate 404 for netlify
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: 'templates/index.html',
        }),

        new CopyWebpackPlugin([
            {
                from: 'src/img',
                to: 'img',
            },
        ]),

    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    devtool: 'source-map',
};
