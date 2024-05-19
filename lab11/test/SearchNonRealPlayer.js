const { Builder } = require('selenium-webdriver');
const HomePage = require('../page/homePage');
const SearchPlayerPage = require('../page/searchPlayerPage');

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
        const searchPlayerPage = new SearchPlayerPage(driver);

        await homePage.open('https://tanki.su/');
        await sleep(3000);
        await homePage.clickCommunityButton();
        await sleep(3000);
        await homePage.clickSearchPlayerButton();
        await sleep(3000);
        await searchPlayerPage.enterNickname('lordiii11');
        await sleep(3000);
        await searchPlayerPage.clickSearchButton();
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
