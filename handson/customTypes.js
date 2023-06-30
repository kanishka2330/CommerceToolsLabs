const { apiRoot, projectKey } = require("./client.js");

module.exports.createCustomType = (typeDraftData) => apiRoot
    .withProjectKey({ projectKey })
    .types()
    .post({
        body: typeDraftData
    })
    .execute();