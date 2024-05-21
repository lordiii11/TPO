const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class ClanPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.enterToClanButton = By.xpath("//div/a[@class='old-button']");
        this.createClanButton = By.xpath("//a[@class='old-button old-button__simple']");
        this.inputTag = By.id("clan_tag");
    }

    async clickEnterToClanButton() {
        await this.driver.findElement(this.createClanButton).click();
    }

    async clickCreateClanButton() {
        await this.driver.findElement(this.createClanButton).click();
    }

    async inputClanTag(tag) {
        const input = await this.driver.findElement(this.inputTag);
        await input.click();
        await input.clear();
        await input.sendKeys(tag);
    }
}

module.exports = ClanPage;
