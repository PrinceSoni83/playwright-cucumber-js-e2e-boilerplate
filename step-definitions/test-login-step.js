const { Given, When , Then } = require('@cucumber/cucumber');
const { TestLoginPage } = require('../page-objects/test-login-page');
const testLoginPage = new TestLoginPage();

Given('I am on the test login screen', async function() {
    await testLoginPage.navigateToTestLoginPage();
    await testLoginPage.verifyTestLoginPageIsDisplayed();
  });

  When('I fill the test login form with valid credentials', async function() {
    await testLoginPage.submitTestLoginForm();
  });

 Then('Then I should be able to see the home page', async function() {
    await testLoginPage.verifyAfterTestLoginPage();
 })