const {
    apiRoot,
    projectKey
} = require("./client");

module.exports.getProject = () => apiRoot
    .withProjectKey({
        projectKey: projectKey
    })
    .get()
    .execute();