locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "#login-button",
    "inventory_container": "#inventory_container" ,
    
  }

  class TestLoginPage {

    async navigateToTestLoginPage() {
    return await page.goto(global.BASE_URL);
    }

    async verifyTestLoginPageIsDisplayed() {
        return expect(await page.title()).to.equal('Test Login | Practice Test Automation');
       }


    async submitTestLoginForm() {
        const element = await page.waitForSelector(locators.username_input);
        await page.fill(locators.username_input,'student');
        await page.fill(locators.password_input,'Password123');
        await page.click(locators.login_button);
    }

    async verifyAfterTestLoginPage() {
        await page.waitForSelector(locators.inventory_container);
        const visible = await page.isVisible(locators.inventory_container);
        return expect(visible).to.equal(true);
          
    }  
    
}

        module.exports = { TestLoginPage };
    

  