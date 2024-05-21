const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');
const { scrollDownToCoordinates } = require('../scroll');;

class PersonalAccountPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.changeNicknameButton = By.xpath("//button[@class='btn-light']");
        this.inputNickname = By.xpath("//input[@class='form-input_inner']");
        this.acceptNicknameButton = By.xpath("//button[@class='antique-button']")
    }

    async clickChangeNicknameButton() {
        await this.driver.findElement(this.changeNicknameButton).click();
    }

    async inputNewNickname(nickname) {
        const input = await this.driver.findElement(this.inputNickname);
        await input.click();
        await input.clear();
        await input.sendKeys(nickname);
    }
    
    async clickAcceptNicknameButton() {
        await this.driver.findElement(this.acceptNicknameButton).click();
    }

    async scrollDownToInfoPromote() {
        let x = 0;
        let y = 250;
        await scrollDownToCoordinates(this.driver, x, y);
    }
}

module.exports = PersonalAccountPage;
