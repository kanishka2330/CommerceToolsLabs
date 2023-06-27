const {
  apiRoot,
  projectKey
} = require("./client.js");

module.exports.getCustomerById = (ID) => {
  return apiRoot.withProjectKey({
      projectKey
    })
    .customers()
    .withId({
      ID
    })
    .get()
    .execute()
}

module.exports.getCustomerByKey = (key) => {
  return apiRoot.withProjectKey({
      projectKey
    })
    .customers()
    .withKey({
      key
    })
    .get()
    .execute()
}

const createCustomerDraft = (customerData) => {
  let {
    firstName,
    lastName,
    email,
    password,
    key,
    countryCode
  } = customerData;
  return {
    firstName,
    lastName,
    email,
    password,
    key,
    addresses: [{
      country: countryCode
    }]
  }
}

module.exports.createCustomer = (customerData) => apiRoot.withProjectKey({
  projectKey
}).customers().post({
  body: createCustomerDraft(customerData)
}).execute()

module.exports.createCustomerToken = (customer) => {
    return apiRoot.withProjectKey({
      projectKey
    }).customers().emailToken().post({
      body: {
        id: customer.body.id,
        ttlMinutes: 4320
      }
    }).execute()
}

module.exports.confirmCustomerEmail = (token) => {
  console.log(token);
  console.log(token.value);
  return apiRoot.withProjectKey({
    projectKey
  }).customers().emailConfirm().post({
    body: {
      tokenValue : token.body.value
    }
  }).execute()
}

module.exports.assignCustomerToCustomerGroup = (
  customerKey,
  customerGroupKey
) => {
  return this.getCustomerByKey(customerKey).then((customer) => {
    const updateActions = [{
      action: 'setCustomerGroup',
      customerGroup: {
        key: customerGroupKey
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