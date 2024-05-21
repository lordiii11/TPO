const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.emailField = By.id('id_login');
        this.passwordField = By.id('id_password');
        this.loginSubmitButton = By.xpath("//*[@id='jsc-submit-button-e60e-c2c6-']");
    }

    async enterEmail(email) {
        const emailInput = await this.driver.findElement(this.emailField);
        await emailInput.click();
        await emailInput.sendKeys(email);
    }

    async enterPassword(password) {
        const passwordInput = await this.driver.findElement(this.passwordField);
        await passwordInput.click();
        await passwordInput.sendKeys(password);
    }

    async clickLoginSubmit() {
        await this.driver.findElement(this.loginSubmitButton).click();
    }
}

module.exports = LoginPage;
