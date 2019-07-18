import BasePage from './BasePage'

export class BusinessPage extends BasePage {

    /**
     * ELEMENTS
    **/

    //input textbox
    get NAME_INPUT () {return $("//*[@placeholder ='Business Name']")}

    //labels
    get BUSINESS_NAME_LABEL () {return $("//h1/span[contains(text(), 'the name')]")}

    //butons
    get PRIMARY_BUTTON () {return $('#CTA')}

    
    /** 
     * METHODS
    **/
    
    visit(){
        super.visit("https://apply.staging.glow.co")
    }

    atBusinessNameScreen(){
        return isDisplayed(this.BUSINESS_NAME_LABEL)
    }
}