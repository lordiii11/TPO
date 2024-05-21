const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class DailyRewardPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.dailyReward = By.xpath("//div[@class='c_item c_default']");
    }

    async clickDailyReward() {
        await this.driver.findElement(this.dailyReward).click();
    }
}

module.exports = DailyRewardPage;
