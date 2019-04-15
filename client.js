const contentful = require('contentful');

module.exports = contentful.createClient({
    space: 'fpic5f5rklmu',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '4a038f56f28821d93ead9bfe9759bb1a7c6093eb8201bc7b93f7805e02e0338f',
});
