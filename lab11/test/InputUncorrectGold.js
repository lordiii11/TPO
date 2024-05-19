const { Builder } = require('selenium-webdriver');
const HomePage = require('../page/homePage');
const PremiumShopPage = require('../page/premiumShopPage');
const GoldPage = require('../page/goldPage');
const GoldDetailPage = require('../page/goldDetailPage');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const setupDriver = async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    return driver;
};

const executeTest = async (driver) => {
    try {
        const homePage = new HomePage(driver);
        const premiumShopPage = new PremiumShopPage(driver);
        const goldPage = new GoldPage(driver);
        const goldDetailPage = new GoldDetailPage(driver);

        await homePage.open('https://tanki.su/');
        await sleep(3000);
        await homePage.clickPremiumShopLink();
        await sleep(3000);
        await homePage.acceptCookies();
        await sleep(3000);
        await premiumShopPage.clickGoldLink();
        await sleep(3000);
        await goldPage.clickAnyGoldOption();
        await sleep(3000);
        await goldDetailPage.setGoldAmount('0');
        await sleep(3000);

        console.log('Тест успешно выполнен!');
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};

(async () => {
    let driver = null;
    try {
        driver = await setupDriver();
        await executeTest(driver);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();
