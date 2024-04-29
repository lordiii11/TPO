const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// Создание и настройка драйвера перед запуском тестов
const setupDriver = async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    return driver;
};

// Основная функция для выполнения теста
const executeTest = async (driver) => {
    try {
        await driver.get('https://tanki.su/');
        await sleep(3000);

        // Нажать на ссылку "Премиум магазин"
        const premiumShopLink = await driver.findElement(By.xpath("//span[@class='cm-singletons_text cm-singletons_text__main' and text()='Премиум магазин']"));
        await premiumShopLink.click();
        await sleep(3000);

        // Выбрать пункт "Золото"
        const TankiLink = await driver.findElement(By.xpath("//a[@class='category-menu_link' and text()=' Золото ']"));
        await TankiLink.click();
        await sleep(3000);
        
        // Выбрать пункт "Любое количество золота"
        const goldOption = await driver.findElement(By.xpath("//a[@href='/shop/wot/gold/ps_p_34' and @class='product_link']"));
        await goldOption.click();
        await sleep(3000);

        // Ввести "0"
        const anyGoldOption = await driver.findElement(By.xpath("//input[@class='inputtext inputtext__amount']"));
        await anyGoldOption.click();
        await sleep(3000);
        await anyGoldOption.clear();
        await anyGoldOption.sendKeys('0');
        await sleep(3000);

        console.log('Тест успешно выполнен!');
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
};

// Выполнение теста
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
