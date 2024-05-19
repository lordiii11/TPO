const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class PremiumShopPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.goldLink = By.xpath("//a[@class='category-menu_link' and text()=' Золото ']");
    }

    async clickGoldLink() {
        await this.driver.findElement(this.goldLink).click();
    }
}

module.exports = PremiumShopPage;
