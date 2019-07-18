export class BasePage{

    constructor(driver) {
        var browser = driver
        var dateTime = new Date()
    }

    visit(urlPath = "") {
        browser.navigateTo(urlPath)
    }

    find(locator){
        element = browser.findElement(locator)
        scrollIntoView(element)
    }

    type(locator, text){

    }

    click(locator){
        var element = find(locator)
        scrollIntoView(element)
        try {
            element.click()            
        } catch (error) {
            
        }
    }
    
    isDisplayed(locator){
        element = find(locator)
        browser.isElementDisplayed(element)
    }
}