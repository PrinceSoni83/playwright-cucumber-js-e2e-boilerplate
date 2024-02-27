const { expect } = require("chai");

locators = {   
"item_4_title_link > div": "#item_4_title_link > div",
"contents_wrapper": "#contents_wrapper" 
  }
  
  class HomePage {

      async navigateToHomePage() {
        return await page.goto(global.OTHER_BASE_URL,{ timeout: 50000 });;
    }

       async  verifyHomePageIsDisplayed() {
        await page.waitForSelector('title', { timeout: 50000 }); 
        const title = await page.title();
        expect(title).to.equal('Swag Labs');

       }
       
       async clickFeaturedProduct() {
        await page.locators('item_4_title_link > div').waitFor();
        await page.locators('item_4_title_link > div').hover();
        await page.click('item_4_title_link > div');
        await page.waitForNavigation();
    }

       
async verifyDetailPage() {
  await page.waitForSelector(locators.contents_wrapper);
  const elementHandle = await page.$(locators.contents_wrapper);
  await elementHandle.click();
  const visible = await page.isVisible(locators.contents_wrapper);
  return expect(visible).to.equal(true);

}

  }

  module.exports = { HomePage };
