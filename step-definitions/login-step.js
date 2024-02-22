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

When('I fill the login form with invalid credentials', async function() {
  await loginPage.submitLoginFormWrongUserCred();
});

When('I fill the login form with empty credentials', async function() {
  await loginPage.submitLoginFormUsingEmptyCred();
});

When('I fill the login form with vaild user but invaild password credentials', async function() {
  await loginPage.submitLoginFormUsingVaildUserButWrongPassword();
});

When('I fill the login form with invaild user but vaild password credentials', async function() {
  await loginPage.submitLoginFormUsingWrongUserVaildPassword();
});


Then('I should be able to see the home screen', async function() {
  await loginPage.verifyAfterLoginPage();
});

Then('I should see error {string}', async function(errorMsg) {
  await loginPage.verifyErrorMsg(errorMsg);});

Then('I should see error {string}', async function(errorMsg) {
  await loginPage.verifyErrorMsg(errorMsg);});

Then('I should see error {string}', async function(errorMsg) {
  await loginPage.verifyErrorMsg(errorMsg); });

Then('I should see error {string}', async function(errorMsg) {
  await loginPage.verifyErrorMsg(errorMsg); });

  

  