const withOffline = require('next-offline');
const path = require('path')

module.exports = withOffline({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[folder]__[local]___[hash:base64:5]',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'resources/scss')]
    },
    trailingSlash: true,
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /.scss/,
    //         loader: 'sass-resources-loader',
    //         options: {
    //             // Provide path to the file with resources
    //             resources: './resources/scss/imports.scss',
    //         },
    //     });

    //     return config;
    // },
});
