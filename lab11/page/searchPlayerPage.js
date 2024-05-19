const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class SearchPlayerPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.inputNickname = By.id('account_table_search');
        this.searchButton = By.xpath("//input[@class='b-btn-search']");
    }

    async enterNickname(nickname) {
        const input = await this.driver.findElement(this.inputNickname);
        await input.click();
        await input.sendKeys(nickname);
    }

    async clickSearchButton() {
        await this.driver.findElement(this.searchButton).click();
    }
}

module.exports = SearchPlayerPage;