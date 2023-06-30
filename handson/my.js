const { myApiRoot, projectKey } = require("./client.js");

//TODO me endpoint


module.exports.getMe = () =>
    myApiRoot
        .withProjectKey({ projectKey })
        .me()
        .get()
        .execute();

module.exports.getMyOrders = () => {}