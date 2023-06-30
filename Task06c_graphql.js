const { apiRoot, projectKey } = require("./handson/client.js");
const { log } = require("./logger");
const { getCustomerWithOrders } = require("./handson/graphql");


const query = `
query {
    orders {
      results {
        customer {
          email
        }
        lineItems {
          nameAllLocales {
            value
          }
        }
        totalPrice {
          centAmount
        }
      }
    }
  }
  `;

  // TODO: POST GraphQL query

  getCustomerWithOrders(query).then(log).catch(log);
