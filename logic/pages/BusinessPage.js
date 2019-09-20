import BasePage from "./BasePage";
import {
    element, button
} from "../utils/Decorators";

class BusinessPage extends BasePage {
    constructor() {
        super();
        /**
         * ELEMENTS
         **/
        //inputs
        this.bpNameInput = "//*[contains(@placeholder, 'Business Name')]";
        this.bpAddressInput = "//*[contains(@placeholder, 'Address')]";
        this.bpFirstNameInput = "#firstName"
        this.bpLastNameInput = "#lastName"
        this.bpWorkEmailInput = "#workEmail"
        this.bpPhoneNumberInput = "#phone"
            //labels
        this.bpBusinessNameLabel = "//h1/span[contains(text(), 'the name')]";
        this.bpAddressConfirmationLabel = "//h1[text()= 'Is this your business?']";
        this.bpPolicyStartLabel = "//h1[text()= 'When do you want your policy to begin?']";
        this.bpEmployeesQuestionLabel = "//div[contains(text(), 'How many of your employees work more than 20 hours a week?')]"
        this.bpQuoteIsReadyLabel = "//h1[contains(text(), 'Your quote')]"
        this.bpMonthlyPayrollLabel = "//h1[contains(text(), 'What is your monthly')]"
        
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
        //TODO: Divide this class
        this.bpAlcoholCookFoodQuestionDiv = "//div[text() = 'Do you serve alcohol or cook food?']"
        this.sliderYearFounded = "//div[text()='What year was your business formed in?']"
        this.bpCateringQuestionDiv = "//div[text() = 'Do your employees deliver or perform off site catering?']"
        this.bpEntertaimentQuestionDiv = "//div[text() = 'Do you have live music or entertainment?']"
        this.bpClosingTimeQuestionDiv = "//div[text() = 'What is the latest closing time for your business during the week?']"
        this.bpBouncersQuestionDiv = "//div[text() = 'Do you have any employees who are bouncers?']"
        this.bpFryerQuestionDiv =  "//div[text() = 'Do you have a fryer?']"
        this.bpGreaseQuestionDiv = "//div[text() = 'Are you using a grease trap cleaning service?']" 
        this.bpXmodQuestionDiv = "//div[contains(text(), 'Do you have an experience modification factor (xMod)?')]"
        this.bpXmodScoreQuestionDiv = "//div[contains(text(), 'What is your experience modification factor (xMod)?')]"
        this.bpClaimsLast4YearsQuestionDiv = "//div[contains(text(), 'Compensation claims in the past 4 years?')]"
        this.bpClaims100kQuestion = "//div[contains(text(), 'claims where the total loss was greater than $100,000?')]"
              
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
    getFirstNameInput() {
        return this.bpFirstNameInput;
    }
    @element(browser)
    getLastNameInput() {
        return this.bpLastNameInput;
    }
    @element(browser)
    getWorkEmailInput() {
        return this.bpWorkEmailInput;
    }
    @element(browser)
    getPhoneNumberInput() {
            return this.bpPhoneNumberInput;
        }
        //labels
    @element(browser)
    getAddressConfirmationLabel() {
        return this.bpAddressConfirmationLabel;
    }

    @element(browser)
    getPolicyStartLabel(){
        return this.bpPolicyStartLabel;
    }

    @element(browser)
    getEmployeesQuestionLabel() {
        return this.bpEmployeesQuestionLabel;
    }    
    @element(browser)
    getAlcoholCookFoodQuestion() {
        return this.bpAlcoholCookFoodQuestionDiv;
    }    
    @element(browser)
    getsliderYearFounded() {
        return this.sliderYearFounded;
    }
    @element(browser)
    getCateringQuestion(){
        return this.bpCateringQuestionDiv;
    }
    @element(browser)
    getEntertaimentQuestion(){
        return this.bpEntertaimentQuestionDiv;
    }
    @element(browser)
    getClosingTimeQuestion(){
        return this.bpClosingTimeQuestionDiv;
    }
    @element(browser)
    getbouncersQuestion(){
        return this.bpBouncersQuestionDiv;
    }
    @element(browser)
    getFryerQuestion(){
        return this.bpFryerQuestionDiv;
    }
    @element(browser)
    getGreaseQuestion(){
        return this.bpGreaseQuestionDiv;
    }
    @element(browser)
    getXmodQuestion() {
        return this.bpXmodQuestionDiv;
    }
    @element(browser)
    getXmodScoreQuestion() {
        return this.bpXmodScoreQuestionDiv;
    }
    @element(browser)
    getClaimsLast4YearsQuestion() {
        return this.bpClaimsLast4YearsQuestionDiv;
    }
    @element(browser)
    getClaims100kQuestion() {
        return this.bpClaims100kQuestion;
    }
    @element(browser)
    getQuoteIsReady() {
        return this.bpQuoteIsReadyLabel;
    }
    @element(browser)
    getMonthlyPayroll() {
        return this.bpMonthlyPayrollLabel;
    }


    
        //butons
    //@button(browser)
    get primaryButton() {
        return $(this.bpPrimaryButton);
    }
    @button(browser)
    nextButton() {
        return this.bpNextButton;
    }
    @button(browser)
    noButton() {
        return this.bpNoButton;
    }
    @button(browser)
    yesButton() {
        return this.bpYesButton;
    }
    @button(browser)
    submitButton() {
        return this.bpSubmitButton;
    }
    get termsOfServicesCheckbox() {
        return $(this.bpTermsOfServicesCheckbox);
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
    yesNoButton(target) {
        if (target == "No"){
            return this.noButton();
        }
        else if (target == "Yes"){
            return this.yesButton();
        }
    }

    visit() {
        super.visit(this.url);
    }

}
export default new BusinessPage();