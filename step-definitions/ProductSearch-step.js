const { Given, When , Then } = require('@cucumber/cucumber');
const { ProductPage } = require('../page-objects/Product-Search');
const productPage = new ProductPage();

Given('I am on the homepage of the nopCommerce website', async function() {
    await productPage.navigateScreen();
    await productPage.verifyScreenIsdisplayed();
  }); 
  
  When('I search for HTC One Mini Blue', async function() {
    await productPage.loadSearch();
  });

  Then('I should see search results for HTC One Mini Blue', async function() {
    await productPage.verifyAfterSearch();
  });
 