import BasePage from "./BasePage";

class BusinessPage extends BasePage {
    /**
     * ELEMENTS
     **/

    //input textbox
    const businessNameTxt = $("//*[@placeholder ='Business Name']")
    //{xpath: "//*[@placeholder ='Business Name']"}
    // get NAME_INPUT() {return $("//*[@placeholder ='Business Name']")}
    // get ADDRESS_INPUT() {return $("//*[@placeholder = 'Business Address']")}
    // get SIGNUP_NAME() {return $("#fistName")}

    //labels
    businessNameLbl = $("//h1/span[contains(text(), 'the name')]")
    get BUSINESS_NAME_LABEL() {return $("//h1/span[contains(text(), 'the name')]")}

    //butons
    get PRIMARY_BUTTON() {return $("#CTA")}

    /**
     * METHODS
     **/

    visit() {
        super.visit("https://apply.staging.glow.co");
    }

    //Screen confirmation methods
    atBusinessNameScreen() {
        return isDisplayed(this.businessNameLbl);
    }

    //Action methods
    setBusinessName(name){
        if (this.atBusinessNameScreen){
            this.type(this.businessNameTxt, name)
        }
        else{
            console.error("Not at Business name screen");            
        }
    }
}
export default new BusinessPage();