const { Given, When , Then } = require('@cucumber/cucumber');
const { HomePage } = require('../page-objects/HomePage');
const homePage = new HomePage();

Given('the user is on the HomePage', async function() {
    await homePage.navigateToHomePage();
    await homePage.verifyHomePageIsDisplayed();
  });

  When('user clicks on a featured product', async function() {
    await homePage.clickFeaturedProduct();
  });

  
Then('the user should be directed to the product details page',async function() {
    await homePage.verifyDetailPage();
  });
  

 