const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3030,
        watchFiles: ["./src/template.html"],
        open: true,
        hot: true,
    },
});