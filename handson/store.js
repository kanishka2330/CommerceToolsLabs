const {
  apiRoot,
  storeApiRoot,
  projectKey
} = require("./client.js");

const {
  getCustomerByKey
} = require("./customer.js");

//TODO store and productProjection endpoint

module.exports.getStoreByKey = (key) =>
  apiRoot.withProjectKey({
    projectKey
  })
  .stores()
  .withKey({
    key
  })
  .get()
  .execute()

  module.exports.createStore = () =>
  apiRoot.withProjectKey({
    projectKey
  })
  .stores()
  .post({
    body: {
      key : "berlin-store",
      name : {
        en : "Berlin store"
      }
    }
  }).execute()

module.exports.getCustomersInStore = (storeKey) =>
  storeApiRoot
  .withProjectKey({
    projectKey
  })
  .inStoreKeyWithStoreKeyValue({
    storeKey
  })
  .customers()
  .get()
  .execute();


module.exports.addProductSelectionToStore = async (storeKey, productSelectionKey) => {}

module.exports.getProductsInStore = (storeKey) => {}

module.exports.createInStoreCart = (storeKey, customer) => {}

module.exports.assignCustomerToStore = (
  customerKey
) => {
  return getCustomerByKey(customerKey).then((customer) => {
    const updateActions = [{
      action: 'addStore',
      store: {
        key: "berlin-store",
        typeId: "store"
      }
    }];
    return apiRoot.withProjectKey({
      projectKey
    }).customers().withId({
      ID: customer.body.id
    }).post({
      body: {
        actions: updateActions,
        version: customer.body.version
      }
    }).execute()
  });
}