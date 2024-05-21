const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');
const { scrollDownToCoordinates } = require('../scroll');;

class GameAccountPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.viewTypeOfStatisctic = By.xpath("//section[@class='profile-grid profile-grid__small-margin']/header/span/a[@class='profile-grid_info-link js-profile-info-link']");
        this.selectGlobalMapStatistic = By.xpath("//section[@class='profile-grid profile-grid__small-margin']/header/span/div/ul/li[@class='select-list_item' and text()='Глобальная карта']");
    }

    async clickViewTypeOfStatisctic() {
        await this.driver.findElement(this.viewTypeOfStatisctic).click();
    }

    async clickselectGlobalMapStatistic() {
        const input = await this.driver.findElement(this.selectGlobalMapStatistic).click();
    }

    async scrollDownToInfoPromote() {
        let x = 0;
        let y = 250;
        await scrollDownToCoordinates(this.driver, x, y);
    }
}

module.exports = GameAccountPage;
