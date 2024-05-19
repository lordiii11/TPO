const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class GoldPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.anyGoldOption = By.xpath("//a[@href='/shop/wot/gold/ps_p_34' and @class='product_link']");
    }

    async clickAnyGoldOption() {
        await this.driver.findElement(this.anyGoldOption).click();
    }
}

module.exports = GoldPage;
