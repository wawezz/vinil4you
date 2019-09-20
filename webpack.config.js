const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const files = require('./webpack/files');
const webpack = require('webpack');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([{
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'delivery': PATHS.source + '/pages/delivery/delivery.js',
            'about': PATHS.source + '/pages/about/about.js',
            'contacts': PATHS.source + '/pages/contacts/contacts.js',
            'feedbacks': PATHS.source + '/pages/feedbacks/feedbacks.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'delivery.html',
                chunks: ['delivery', 'common'],
                template: PATHS.source + '/pages/delivery/delivery.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: PATHS.source + '/pages/about/about.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'contacts.html',
                chunks: ['contacts', 'common'],
                template: PATHS.source + '/pages/contacts/contacts.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'feedbacks.html',
                chunks: ['feedbacks', 'common'],
                template: PATHS.source + '/pages/feedbacks/feedbacks.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    files()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ]);
    }
};