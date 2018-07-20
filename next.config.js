const withSass = require("@zeit/next-sass");
const contentful = require('contentful')


module.exports = withSass({
    cssModules: true,
    exportPathMap: async function (defaultPathMap) {

        const client = contentful.createClient({
            space: 'fpic5f5rklmu',
            environment: 'master', // defaults to 'master' if not set
            accessToken: '4a038f56f28821d93ead9bfe9759bb1a7c6093eb8201bc7b93f7805e02e0338f'
        });

        const projectEntries = await client.getEntries({
            content_type: 'project',
        })
            // Get the `items` from the response
            .then(res => res.items);

        // In order to get the info for the projects in the home poject listing enty
        const homeProjectListing = await client.getEntry('7WnDEAQXHqA8eq8C6EeEe')
            // Get just `projects` from the response.
            .then(res => res.fields.projects)
            // Get just the `id` for each project
            .then(projects => projects.map(project => project.sys.id))
            // Using the id's get the project data from the `projectEntries` array with the matching `id`
            .then(ids => ids
                .map(id => projectEntries.find((project => project.sys.id === id)))
            )
            // // Only get the fields for the projects.
            .then(projects => projects.map(project => project.fields))


        // Get the `fields` for ALL the projects. This way we can support archive data.
        const projects = projectEntries.map(item => item.fields);

        const pages = {
            '/': {
                page: '/',
                query: {
                    title: 'Andrew Hipp - Front End Developer',
                    projects: homeProjectListing,
                }
            },
            '/archive': {
                page: '/',
                query: {
                    title: 'Archive - Andrew Hipp - Front End Developer',
                    projects,
                }
            },
        };

        projects.forEach(project => {
            pages[`/projects/${project.slug}`] = {
                page: '/project',
                title: `Project: ${project.name} - Andrew Hipp - Front End Developer`,
                query: {
                    project,
                },
            };
        });

        return pages
    }
});
