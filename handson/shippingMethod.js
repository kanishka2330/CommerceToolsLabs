const {
    apiRoot,
    projectKey
} = require("./client");

module.exports.getShippingMethods = (ID) =>
    apiRoot.withProjectKey({
        projectKey
    })
    .shippingMethods()
    .withId({
        ID
    })
    .get()
    .execute()