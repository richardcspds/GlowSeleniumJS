import BasePage from "./BasePage";
import dateFormat from "dateformat";
import { element, readonly } from "../utils/Decorators";
import calendarFragment from "../pages/fragments/calendarFragment"
import sliderFragment from "../pages/fragments/sliderFragments"

class BusinessPage extends BasePage {
    constructor() {
        super();
        /**
         * ELEMENTS
         **/
        //inputs
        this.bpNameInput = "//*[@placeholder ='Business Name']";
        this.bpAddressInput = "//*[@placeholder ='Business Address']";
        this.bpFirstNameInput = "#firstName"
        this.bpLastNameInput = "#lastName"
        this.bpWorkEmailInput = "#workEmail"
        this.bpPhoneNumberInput = "#phone"
        //labels
        this.bpBusinessNameLabel = "//h1/span[contains(text(), 'the name')]";
        this.bpAddressConfirmationLabel = "//h1[text()= 'Is this your business?']";
        this.bpEmployeesQuestionLabel = "//div[contains(text(), 'How many of your employees work more than 20 hours a week?')]"
        //dropdowns
        this.bpNameDropDown = '//*[@id="Main"]/div/div[2]/div/div';
        this.bpAddressDropDown = "//div[contains(@class, 'dropdown-item')]";
        //buttons
        this.bpPrimaryButton = "#CTA";
        this.bpNextButton = "//button/span[contains(text(), 'Next')]";
        this.bpYesButton = "//button/span[contains(text(), 'Yes')]";
        this.bpNoButton = "//button/span[contains(text(), 'No')]";
        this.bpSubmitButton = "//button[@type = 'submit']";
        //checkboxes
        this.bpTermsOfServicesCheckbox = "#toc";
        //sections
        this.bpIndustryLabel = "//div[text() = '{0}']";
        this.bpCategoryLabel = "//section//div[text() = '{0}']";
        this.bpSubCategoryLabel = "//section//div[text() = '{0}']";
        this.url = "https://apply.staging.glow.co";
    }

    /**
     * GETTERS
     **/
    //inputs
    @element(browser)
    getNameInput() {
        return this.bpNameInput;
    }

    @element(browser)
    getAddressInput() {
        return this.bpAddressInput;
    }
    //labels
    get getBusinessLabel() {
        return $(this.bpBusinessNameLabel);
    }
    @element(browser)
    getFirstNameInput(){
        return this.bpFirstNameInput;
    }
    @element(browser)
    getLastNameInput(){
        return this.bpLastNameInput;
    }
    @element(browser)
    getWorkEmailInput(){
        return this.bpWorkEmailInput;
    }
    @element(browser)
    getPhoneNumberInput(){
        return this.bpPhoneNumberInput;
    }
    //labels
    @element(browser)
    getAddressConfirmationLabel() {
            return this.bpAddressConfirmationLabel;
        }
    //butons
    get primaryButton() {
        return $(this.bpPrimaryButton);
    }
    get nextButton() {
        return $(this.bpNextButton);
    }
    get noButton(){
        return $(this.bpNoButton);
    }
    get yesButton(){
        return $(this.bpYesButton);
    }
    get submitButton(){
        return $(this.bpSubmitButton);
    }
    get termsOfServicesCheckbox(){
        return $(this.bpTermsOfServicesCheckbox);
    }
    get getNameDropDown() {
        return $(this.bpNameDropDown);
    }
    get getAddressDropDown() {
        return $(this.bpAddressDropDown);
    }

    get getURL() {
        return this.url;
    }

    /**
     * METHODS
     **/
    selectDropDownByIndex(index = 1) {
        var dropDown = this.bpAddressDropDown + "[" + index + "]";
        return $(dropDown);
    }
    selectIndustry(type) {
        var industry = this.bpIndustryLabel.replace("{0}", type);
        return $(industry);
    }
    selectCategory(type) {
        var category = this.bpCategoryLabel.replace("{0}", type);
        return $(category);
    }
    selectSubCategory(type) {
        var subCategory = this.bpSubCategoryLabel.replace("{0}", type);
        this.isDisplayed($(subCategory));
        return $(subCategory);
    }     
    /**
     * Slider methods
     **/ 
    setSliderValue(value, index = 1){
        if (typeof value == "number"){
            sliderFragment.moveIt(value, index)
        }
        else if (typeof value == "string"){
            if (value.includes(":")){
                var target = this.getClosingTimeTarget(value)
                sliderFragment.moveIt(target, index)
            }
            else if (value.includes(["K","M"])){
                // var target = getPayrollTarget(value)
                sliderFragment.moveIt(target, index)
            }
        }
    }

    getClosingTimeTarget(value){
        var closeTimeValue = {"6:00 am": 0, "6:30 am": 1, "7:00 am": 2, "7:30 am": 3, "8:00 am": 4, "8:30 am": 5, "9:00 am": 6, "9:30 am": 7,
         "10:00 am": 8, "10:30 am": 9, "11:00 am": 10, "11:30 am": 11, "12:00 pm": 12, "12:30 pm": 13, "1:00 pm": 14, "1:30 pm": 15,
         "2:00 pm": 16, "2:30 pm": 17, "3:00 pm": 18, "3:30 pm": 19, "4:00 pm": 20, "4:30 pm": 21, "5:00 pm": 22, "5:30 pm": 23,
         "6:00 pm": 24, "6:30 pm": 25, "7:00 pm": 26, "7:30 pm": 27, "8:30 pm": 28, "9:30 pm": 29, "10:00 pm": 30, "10:30 pm": 31,
         "11:00 pm": 32, "11:30 pm": 33, "12:00 am": 34, "12:30 am": 35, "1:00 am": 36, "1:30 am": 37, "2:00 am": 38, "2:30 am": 39,
         "3:00 am": 40, "3:30 am": 41, "4:00 am": 42, "4:30 am": 43, "5:00 am": 44, "5:30 am": 45, "24 hours": 46 }
         return closeTimeValue[value]            
    }

    visit() {
        super.visit(this.url);
    }

}
export default new BusinessPage();