import BasePage from "./BasePage";

class BusinessPage extends BasePage {
    constructor() {
        super();
        /**
        * ELEMENTS
        **/
        
        //inputs
        this.bpNameInput = "//*[@placeholder ='Business Name']";
        this.bpAddressInput = "//*[@placeholder ='Business Address']";
        //labels
        this.bpBusinessNameLabel = "//h1/span[contains(text(), 'the name')]";
        this.bpAddressConfirmationLabel = "//h1[text()= 'Is this your business?']"
        //dropdowns
        this.bpNameDropDown = '//*[@id="Main"]/div/div[2]/div/div';        
        this.bpAddressDropDown = "//div[contains(@class, 'dropdown-item')]";
        //buttons
        this.bpPrimaryButton = "#CTA";
        this.bpNextButton = "//button/span[contains(text(), 'Next')]"
        //sections
        this.bpIndustryLabel = "//div[text() = 'INDUSTRY']"
        this.bpCategoryLabel = "//section//div[text() = 'CATEGORY']"
        this.bpSubCategoryLabel = "//section//div[text() = 'SUBCATEGORY']"
    }

    /**
     * ELEMENTS
     **/

    //input textbox
    get getNameInput() {
        this.isDisplayed($(this.bpNameInput));
        return $(this.bpNameInput);
    }
    get getAddressInput() {
            this.isDisplayed($(this.bpAddressInput));
            return $(this.bpAddressInput);
        }
        //labels
    get getBusinessLabel() {
            return $(this.bpBusinessNameLabel);
        }
    get getAddressConfirmationLabel(){
        this.isDisplayed($(this.bpAddressConfirmationLabel))
        return $(this.bpAddressConfirmationLabel);
    }
        //butons
    get primaryButton() {
        return $(this.bpPrimaryButton);
    }
    get nextButton(){
        return $(this.bpNextButton);
    }
    get getNameDropDown() {
        return $(this.bpNameDropDown);
    }
    get getAddressDropDown() {
        return $(this.bpAddressDropDown);
    }

    /**
     * METHODS
     **/
    selectDropDownByIndex(index = 1) {
        var dropDown = this.bpAddressDropDown + "["+ index + "]"
        return $(dropDown)
    }
    selectIndustry(type){
        var industry = this.bpIndustryLabel.replace("INDUSTRY", type);
        return $(industry)
    }
    selectCategory(type){
        var category = this.bpCategoryLabel.replace("CATEGORY", type)
        return $(category)
    }
    visit() {
        super.visit("https://apply.staging.glow.co");
    }
}
export default new BusinessPage();