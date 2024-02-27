// const { Given, When , Then } = require('@cucumber/cucumber');
const { Given, When, Then, And } = require('@cucumber/cucumber');
const { Homepage } = require('../page-objects/homepage');
const homepage = new Homepage();

Then('I will validate X on Homepage', async function () {
    await homepage.validateXVisible();
});

Then('I will validate Facebook on Homepage', async function () {
    await homepage.validateFacebookVisible();
});

Then('I will validate LinkedIn on Homepage', async function () {
    await homepage.validateLinkedInVisible();
});

Then('I will be able to add Sauce Labs Backpack to the Cart from Homepage', async function () {
    await homepage.addSauceLabsBackpackToCart();
});
