const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const project = require('./package.json').project;


module.exports = {
    entry: {
        'js/main': `${project.src.js}/main.js`,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
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
                        // options: {
                        //     fix: true,
                        // },
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
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
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
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
        new ExtractTextPlugin({
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
                baseDir: './',
            },
            port: 8000,
        }),

    ],
    devtool: 'source-map',
};
