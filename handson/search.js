const {
    apiRoot,
    projectKey
} = require("./client.js");

module.exports.getAllProducts = () =>
    apiRoot
    .withProjectKey({
        projectKey
    })
    .productProjections()
    .search()
    .get()
    .execute();

// filter query recalculates everything
// filter facet recalculates others only
module.exports.simulateSearch = () =>
    apiRoot
    .withProjectKey({
        projectKey
    })
    .productProjections()
    .search()
    .get({
        queryArgs: {
            filter: 'categories.id:"1eef0767-e474-48eb-b340-2172310321e9"',
        }
    })
    .execute();

module.exports.simulatePagination = (perPage, page) =>
    apiRoot
    .withProjectKey({
        projectKey
    })
    .productProjections()
    .get({
        queryArgs: {
            limit: perPage,
            offset: null
        }
    })
    .execute();