const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');

module.exports = withSass(withOffline({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[folder]__[local]___[hash:base64:5]',
    },
    trailingSlash: true,
    webpack(config) {
        config.module.rules.push({
            test: /.scss/,
            loader: 'sass-resources-loader',
            options: {
                // Provide path to the file with resources
                resources: './resources/scss/imports.scss',
            },
        });

        return config;
    },
}));
