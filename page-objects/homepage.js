homepageLocators = {
    "inventory_container": "#inventory_container",
    "xInHomepage": '.social_twitter',
    "facebookInHomepage": '#page_wrapper > footer > ul > li.social_facebook > a',
    "linkedInInHomepage": '#page_wrapper > footer > ul > li.social_linkedin > a',
    "ToCartSauceLabsBackpack": '#add-to-cart-sauce-labs-backpack',
  }
  
  class Homepage {

async validateXVisible() {
  await page.waitForSelector(homepageLocators.xInHomepage);
  const visible = await page.isVisible(homepageLocators.xInHomepage);
  return expect(visible).to.equal(true);
}

  async validateFacebookVisible() {
    await page.waitForSelector(homepageLocators.facebookInHomepage);
    const visible = await page.isVisible(homepageLocators.facebookInHomepage);
    return expect(visible).to.equal(true);
  }

  async validateLinkedInVisible() {
    await page.waitForSelector(homepageLocators.linkedInInHomepage);
    const visible = await page.isVisible(homepageLocators.linkedInInHomepage);
    return expect(visible).to.equal(true);
  }

  async addSauceLabsBackpackToCart() {
    const element = await page.waitForSelector(homepageLocators.ToCartSauceLabsBackpack);
    await page.click(homepageLocators.ToCartSauceLabsBackpack);
  }


 }
 
 module.exports = { Homepage };