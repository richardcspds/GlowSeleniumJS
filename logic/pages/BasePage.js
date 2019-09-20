export default class BasePage {
    constructor() {
        var browser = driver;
        var dateTime = new Date();
    }

    visit(urlPath = "") {
        browser.url(urlPath);
    }

    find(locator) {
        element = browser.findElement(locator);
        scrollIntoView(element);
    }

    type(locator, text) {}

    click(locator) {
        this.isDisplayed(locator);
        locator.click();
    }

    isDisplayed(locator) {
        browser.waitUntil(() => {
            return locator.waitForExist();
        });
        locator.scrollIntoView();
        return true;
    }
}