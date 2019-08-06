import BasePage from "./BasePage";
import dateFormat from "dateformat";
import { element,readonly} from "../utils/Decorators";
import calendarFragment from "../pages/fragments/calendarFragment"

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
        this.bpXmodQuestionLabel = "//div[contains(text(), 'Do you have an experience modification factor (xMod)?')]"
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
    getEmployeesQuestionLabel(){
        return this.bpEmployeesQuestionLabel;
    }
    @element(browser)
    getXmodQuestionLabel(){
        return this.bpXmodQuestionLabel;
    }
        //butons
    get primaryButton() {
        return $(this.bpPrimaryButton);
    }
    get nextButton() {
        return $(this.bpNextButton);
    }
    get noButton() {
        return $(this.bpNoButton);
    }
    get yesButton() {
        return $(this.bpYesButton);
    }
    get submitButton() {
        return $(this.bpSubmitButton);
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

    visit() {
        super.visit(this.url);
    }

}
export default new BusinessPage();