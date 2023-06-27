const {
  createCustomer,
  getCustomerById,
  getCustomerByKey,
  createCustomerToken,
  confirmCustomerEmail,
  assignCustomerToCustomerGroup,
} = require("./handson/customer");
const { log } = require("./logger.js");

const customerDraftData = {
  firstName: "test",
  lastName: "test",
  email: "test@test.com",
  password: "password",
  key: "test123",
  countryCode: "DE",
};

//  createCustomer(customerDraftData).then(log).catch(log);

//  getCustomerByKey('test123').then(log).catch(log);

//  getCustomerById("8b4a252f-4e0d-44f0-a9c9-adf62a3bf9f3").then(log).catch(log);

 getCustomerByKey('test123')
  .then(createCustomerToken)
  .then(confirmCustomerEmail)
  .then(log)
  .catch(log);

assignCustomerToCustomerGroup('test123','indoor-customers').then(log).catch(log);
