const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
        this.premiumShopLink = By.xpath("//span[@class='cm-singletons_text cm-singletons_text__main' and text()='Премиум магазин']");
        this.cookieBannerAccept = By.id("cookie-banner__accept");
        this.communityButton = By.xpath("//a[text()='Сообщество']/span[@class='nav-submenu_arrow js-mainmenu-arrow']");
        this.searchPlayerButton = By.xpath("//a[@class='nav-detail_link js-portal-menu-link-text' and text()='Поиск игроков']");
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
}

module.exports = HomePage;
