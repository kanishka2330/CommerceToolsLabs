const { getProject } = require("./handson/project.js");
const { getShippingMethods } = require("./handson/shippingMethod.js");
const { apiRoot, projectKey } = require("./handson/client.js");
const { log } = require("./logger.js");
const { getTaxCategoryByKey } = require("./handson/taxCategory.js");

// getProject().then(log).catch(log);
getShippingMethods('f19391cd-cea1-4b22-82ad-f0f592021377').then(log).catch(log);
getTaxCategoryByKey('default-tax').then(log).catch(log);

// TODO : GET Tax Category by key
