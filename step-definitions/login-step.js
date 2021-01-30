const { Given, When , Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the login screen', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyLoginPageIsDisplayed();
});

When('I fill the login form with valid credentials', async function() {
  await loginPage.submitLoginForm();
});

Then('I should be able to see the home screen', async function() {
  await loginPage.verifyAfterLoginPage();
});