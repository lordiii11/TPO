const { Builder } = require('selenium-webdriver');
const HomePage = require('../page/homePage');
const LoginPage = require('../page/loginPage');
const ClanPage = require('../page/clanPage');


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
        const clanPage = new ClanPage(driver);

        await homePage.open('https://tanki.su/');
        await sleep(3000);
        await homePage.clickClanButton();
        await sleep(3000);
        await clanPage.clickEnterToClanButton();
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
