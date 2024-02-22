 locators = {
   "username_input": "#user-name",
   "password_input": "#password",
   "login_button": "#login-button",
   "inventory_container": "#inventory_container",
   "error" : "[data-test=\"error\"]"
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


  async submitLoginFormWrongUserCred() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'7656787654');
    await page.fill(locators.password_input,'76545678876');
    await page.click(locators.login_button);
  }

  async submitLoginFormUsingEmptyCred() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'');
    await page.fill(locators.password_input,'');
    await page.click(locators.login_button);
  }

  async submitLoginFormUsingVaildUserButWrongPassword() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'standard_user');
    await page.fill(locators.password_input,'weverve');
    await page.click(locators.login_button);
  }

  async submitLoginFormUsingWrongUserVaildPassword() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'frebrerb43');
    await page.fill(locators.password_input,'secret_sauce');
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.inventory_container);
    const visible = await page.isVisible(locators.inventory_container);
    return expect(visible).to.equal(true);
  }

  async verifyErrorMsg(error) {
    await page.waitForSelector(locators.error);
    const errorMsg = await page.locator(locators.error).innerText();
    return expect(errorMsg.includes(error)).to.equal(true, `was looking text : ${error} but did not find it. found text ${errorMsg}`);
    

    
 }



}


module.exports = { LoginPage };