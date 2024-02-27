const { expect } = require("chai");

locators = {
  "ui-id-11": "#ui-id-11",
  "div":"#div"

}



  class ProductPage {

    async navigateScreen() {
     return await page.goto(global.ANOTHER_BASE_URL);
    }

    async verifyScreenIsdisplayed() {
        return expect(await page.title()).to.equal('nopCommerce');
       }

    async loadSearch() {
    await page.getByPlaceholder('Search store').click();
    await page.getByPlaceholder('Search store').press('CapsLock');
    await page.getByPlaceholder('Search store').fill('HTC');
    await page.getByPlaceholder('Search store').click();
    await page.getByPlaceholder('Search store').fill('HTC ');
    await page.getByPlaceholder('Search store').press('CapsLock');
    await page.getByPlaceholder('Search store').fill('HTC o');
    await page.getByPlaceholder('Search store').press('CapsLock');
    await page.getByPlaceholder('Search store').fill('HTC ');
    await page.getByPlaceholder('Search store').press('CapsLock');
    await page.locator('#ui-id-11').click();
      }


    async verifyAfterSearch() {
    await expect(page.locator('div').filter({ hasText: 'US DollarEuroRegisterLog in' }).first()).toBeVisible();
   
      }
    

    }


module.exports = { ProductPage };