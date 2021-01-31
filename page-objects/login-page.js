 locators = {
   "username_input": "#user-name",
   "password_input": "#password",
   "login_button": "#login-button",
   "inventory_container": "#inventory_container"
 }
 
 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed() {
   return expect(await page.title()).to.equal('Swag Labs');
  }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'standard_user');
    await page.fill(locators.password_input,'secret_sauce');
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.inventory_container);
    const visible = await page.isVisible(locators.inventory_container);
    return expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };