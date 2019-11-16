global.__PLATFORM__ = process.env.RN_PLATFORM || 'ios';
const assetsPath = '/dist';

module.exports = {
    context: __dirname,
    entry: {
        index: [
            'react-native-webpack/clients/polyfills.js',
            `./index.${__PLATFORM__}.js`,
        ],
    },
    output: {
        path: assetsPath,
        filename: `[name].${__PLATFORM__}.bundle`,
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    devServer: {
        port: 8081,
        quiet: false,
        noInfo: true,
        lazy: true,
        filename: `[name].${__PLATFORM__}.bundle`,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
        publicPath: '/',
        stats: { colors: true },
    },
};
