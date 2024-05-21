const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.premiumShopLink = By.xpath("//span[@class='cm-singletons_text cm-singletons_text__main' and text()='Премиум магазин']");
        this.cookieBannerAccept = By.id("cookie-banner__accept");
        this.communityButton = By.xpath("//a[text()='Сообщество']/span[@class='nav-submenu_arrow js-mainmenu-arrow']");
        this.searchPlayerButton = By.xpath("//a[@class='nav-detail_link js-portal-menu-link-text' and text()='Поиск игроков']");
        this.loginButton = By.xpath("//a[@class='cm-link cm-link__register cm-link__no-decoration js-cm-event js-cm-login-link js-cm-link-ignore-target']");
        this.accountButton = By.xpath("//*[@id='common_menu']/div/div[1]/div[1]/a[2]/span[3]");
        this.redirectToAccountPage = By.xpath("//span[@class='cm-singletons_text' and text()='Личный кабинет']");
        this.redirectToGameAccountPage = By.xpath("//a[@class='cm-card-game_name cm-card-game_name__link cm-card-game_name__simple']");
        this.clanButton = By.xpath("//a[@class='nav-submenu_link' and text()='Кланы']");
        this.daileReward = By.xpath("//span[@class='cm-singletons_text cm-singletons_text__main' and text()='Табель-календарь']");
        this.redirectToBonusCodePage = By.xpath("//span[@class='cm-singletons_text' and text()='Активировать код Lesta Games']");
    }

    async clickPremiumShopLink() {
        await this.driver.findElement(this.premiumShopLink).click();
    }

    async acceptCookies() {
        await this.driver.findElement(this.cookieBannerAccept).click();
    }

    async clickCommunityButton() {
        await this.driver.findElement(this.communityButton).click();
    }

    async clickSearchPlayerButton() {
        await this.driver.findElement(this.searchPlayerButton).click();
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }

    async clickAccountButton() {
        await this.driver.findElement(this.accountButton).click();
    }

    async clickRedirectToAccountPage() {
        await this.driver.findElement(this.redirectToAccountPage).click();
    }

    async clickRedirectToGameAccountPage() {
        await this.driver.findElement(this.redirectToGameAccountPage).click();
    }

    async clickClanButton() {
        await this.driver.findElement(this.clanButton).click();
    }

    async clickDailyRewardPage() {
        await this.driver.findElement(this.daileReward).click();
    }

    async clickRedirectToBonusCodePage() {
        await this.driver.findElement(this.redirectToBonusCodePage).click();
    }
}

module.exports = HomePage;
