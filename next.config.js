const client = require('./client');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[folder]__[local]___[hash:base64:5]'
    },
    exportPathMap: async function(defaultPathMap) {
        const projects = await client.getEntries({
            content_type: 'project',
        })
            .then(res => res.items)
            .then(res =>
                res.reduce((acc, {
                    fields: {
                        slug,
                    } = {},
                }) => ({
                    ...acc,
                    [`/projects/${slug}`]: slug && {
                        page: '/project',
                        query: {
                            slug,
                        }
                    },
                }), {})
            );

        return {
          '/': { page: '/' },
          '/archive': { page: '/archive' },
          ...projects,
        };
    }
});
