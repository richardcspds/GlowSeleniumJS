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
        //sliders
        this.slider = "//div[@role = 'slider']"
        this.sliderRail = "//div[@class = 'rc-slider']"
        // PAYROLL_SLIDER = {xpath: "(//div[@role = 'slider'])[N]"}
        // PAYROLL_SLIDER_RAIL = {xpath: "(//div[@class = 'rc-slider'])[N]"}

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
    setPolicyDateDays(days){
        var currentDate = new Date();
        var newDate = new Date();
        newDate.setDate(currentDate.getDate() + days);
        this.setDate(dateFormat(newDate, "ddd mmm dd yyyy"));
    }
    setPolicyDateWeeks(weeks) {
        var currentDate = new Date();
        var future = new Date();
        future.setDate(currentDate.getDate() + weeks * 7);
        this.setDate(dateFormat(future, "ddd mmm dd yyyy"));
    }
    /*
     * Methods for sliders
     */
    setSliderValue(value){
        var sld = $(this.slider);
        var sldRail = $(this.sliderRail);
        var minValue = parseFloat(sld.getAttribute("aria-valuemin"));
        var maxValue = parseFloat(sld.getAttribute("aria-valuemax"));
        var valueNow = parseFloat(sld.getAttribute("aria-valuenow"));
        if (value > maxValue){
            value = maxValue
        }
        var target = this.getPixelsToMove(sldRail, value, maxValue, minValue, valueNow);
        sld.moveTo();
        browser.buttonDown();
        sld.moveTo(target, 0);
        browser.buttonUp();
    }  
    getPixelsToMove(sliderRail, value, maxValue, minValue, valueNow){
        var width = sliderRail.offsetWidth;
        var currentPixel = (width / (maxValue - minValue)) * (valueNow - minValue);
        var tempPixels = ((width / (maxValue - minValue)) * (value - minValue)) - currentPixel;
        return tempPixels
    }

    @element(browser)
    test() {
        return this.bpNameInput;
    }
}
export default new BusinessPage();