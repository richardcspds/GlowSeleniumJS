import BasePage from "./BasePage";
import dateFormat from "dateformat";
import { element, readonly } from "../utils/Decorators";

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
        this.bpAddressConfirmationLabel = "//h1[text()= 'Is this your business?']";
        //dropdowns
        this.bpNameDropDown = '//*[@id="Main"]/div/div[2]/div/div';
        this.bpAddressDropDown = "//div[contains(@class, 'dropdown-item')]";
        //buttons
        this.bpPrimaryButton = "#CTA";
        this.bpNextButton = "//button/span[contains(text(), 'Next')]";
        //sections
        this.bpIndustryLabel = "//div[text() = '{0}']";
        this.bpCategoryLabel = "//section//div[text() = '{0}']";
        this.bpSubCategoryLabel = "//section//div[text() = '{0}']";
        this.url = "https://apply.staging.glow.co";

        // Calendar
        this.dateCaption = "//div[contains(@class, 'DayPicker-Caption')]/div";
        this.dateNextMonth = "//i[contains(@aria-label, 'Next')]";
        this.dateDay =
            '//div[contains(@class,"DayPicker-Day") ' +
            ' and contains(@aria-label,"{0}")]';

        // this.test = "test";
    }

    /**
     * GETTERS
     **/

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

    /*
     * Methods for the calendar
     */

    setDate(date) {
        var nDate = this.dateDay.replace("{0}", date);
        while (!$(nDate).isDisplayed()) {
            $(this.dateNextMonth).click();
        }
        $(nDate).click();
    }
    setPolicyDateWeeks(weeks) {
        var currentDate = new Date();
        var future = new Date();
        future.setDate(currentDate.getDate() + weeks * 7);
        this.setDate(dateFormat(future, "ddd mmm dd yyyy"));
    }

    @element(browser)
    test() {
        return this.bpNameInput;
    }
}
export default new BusinessPage();