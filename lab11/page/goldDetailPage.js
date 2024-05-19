const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class GoldDetailPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.goldAmountInput = By.xpath("//input[@class='inputtext inputtext__amount']");
    }

    async setGoldAmount(amount) {
        const input = await this.driver.findElement(this.goldAmountInput);
        await input.click();
        await input.clear();
        await input.sendKeys(amount);
    }
}

module.exports = GoldDetailPage;
