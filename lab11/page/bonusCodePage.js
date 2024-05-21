const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class BonusCodePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.inputBonusCode = By.xpath("//input[@class='redeem-page_input inputtext']");
        this.acceptBonusCode = By.xpath("//button[@class='btn redeem-page_button btn__primary']");
    }

    async setBonusCode(bonuscode) {
        const input = await this.driver.findElement(this.inputBonusCode);
        await input.click();
        await input.clear();
        await input.sendKeys(bonuscode);
    }

    async clickAcceptBonusCode() {
        await this.driver.findElement(this.acceptBonusCode).click();
    }
}

module.exports = BonusCodePage;
