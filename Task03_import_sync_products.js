const { 
    createImportContainer,
    importProducts,
    checkImportSummary,
    checkImportOperations, 
    checkImportOperationById
    } = require("./handson/importService");
const { log } = require("./logger.js");

const containerKey = "TestImportContainer";

// Create an import container
// createImportContainer(containerKey).then(log).catch(log);

// import products
// importProducts(containerKey).then(log).catch(log);

// check import summary for your container
checkImportSummary(containerKey).then(log).catch(log);

// check import operations for your container
// checkImportOperations(containerKey).then(operations =>
//    operations.body.results.forEach(operation =>
//        log(operation.id + " : " +operation.state)
//    )
// )

// Check the status of import operations by their Ids
//  checkImportOperationById("9a4a83b8-a3a6-4187-8021-51a715e0d132").then(log).catch(log);
//  checkImportOperationById("32d47f25-fc8b-46ab-b8f3-17d0d3e7c313").then(log).catch(log);

// https://github.com/commercetools/commercetools-project-sync#run
// docker run \
// -e SOURCE_PROJECT_KEY=xxx \
// -e SOURCE_CLIENT_ID=xxx \
// -e SOURCE_CLIENT_SECRET=xxx \
// -e TARGET_PROJECT_KEY=xxx \
// -e TARGET_CLIENT_ID=xxx \
// -e TARGET_CLIENT_SECRET=xxx \
// commercetools/commercetools-project-sync:5.1.2 -s all
