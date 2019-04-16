const client = require('./client');
const withSass = require('@zeit/next-sass');
const withPreact = require('@zeit/next-preact');

module.exports = withPreact(
    withSass({
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
                    res.reduce((acc, project) => ({
                        ...acc,
                        [`/projects/${project.fields.slug}`]: {
                            page: '/project',
                            query: {
                                slug: project.fields.slug,
                            }
                        },
                    }), {})
                );

            return {
              '/': { page: '/' },
              // '/archive': { page: '/archive' },
              ...projects,
            };
        }
    })
);
