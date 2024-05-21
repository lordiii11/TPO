const { Builder } = require('selenium-webdriver');
const HomePage = require('../page/homePage');
const LoginPage = require('../page/loginPage');
const PersonalAccountPage = require('../page/personalAccountPage');

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
        const loginPage = new LoginPage(driver);
        const personalAccountPage = new PersonalAccountPage(driver);

        await homePage.open('https://tanki.su/');
        await sleep(3000);
        await homePage.clickLoginButton();
        await sleep(3000);
        await loginPage.enterEmail('samkevich04@mail.ru');
        await sleep(1000);
        await loginPage.enterPassword('Maksim210703V');
        await sleep(1000);
        await loginPage.clickLoginSubmit();
        await sleep(3000);
        await homePage.clickAccountButton();
        await sleep(3000);
        await homePage.clickRedirectToAccountPage();
        await sleep(3000);
        await personalAccountPage.clickChangeNicknameButton();
        await sleep(3000);
        await personalAccountPage.scrollDownToInfoPromote();
        await sleep(3000);
        await personalAccountPage.inputNewNickname('lordiii');
        await sleep(3000);
        await personalAccountPage.clickAcceptNicknameButton();
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
