/* eslint-disable no-undef */
import businessPage from "../pages/BusinessPage"
var stringValues = require("../values/strings.json")
import allureReporter from "@wdio/allure-reporter"

describe("Smoke Testing", function() {
    it("Business Name and Address", () => {
        allureReporter.addArgument("URL", businessPage.getURL)
        allureReporter.addStep("Go to glow page", [businessPage.visit()])
        allureReporter.addStep("Insert business name")
        businessPage.getNameInput().setValue(stringValues.company_name)
        allureReporter.addStep("Select name from dropdown")
        businessPage.getNameDropDown.click()
        allureReporter.addStep("Click on next button")
        businessPage.primaryButton.click()
    })
    it("Classification", () => {
        allureReporter.addStep("Insert business address")
        businessPage.getAddressInput().setValue(stringValues.company_address)
        allureReporter.addStep("Select business address from dropdown")
        businessPage.selectDropDownByIndex().click()
        allureReporter.addStep("Confirm address")
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.addStep("Select Industry")
        businessPage.selectIndustry(stringValues.company_industry).click()
        businessPage.nextButton.click()
        allureReporter.addStep("Select Category")
        businessPage.selectCategory(stringValues.company_category).click()
        businessPage.nextButton.click()
            //Select sub category
        businessPage.selectSubCategory(stringValues.company_subcategory).click()
        businessPage.nextButton.click()
    })
    it("Policy Start Date", () => {
        businessPage.setPolicyDateWeeks(2)
        businessPage.nextButton.click()
        browser.pause(5000);
        
    })
    it("Answer form questions", () =>{
        // businessPage.setSliderValue(20);
        businessPage.nextButton.click();
        browser.pause(5000);
        businessPage.nextButton.click();
        browser.pause(5000);
        businessPage.nextButton.click();
        browser.pause(5000);
        businessPage.noButton.click();
        browser.pause(5000);
        businessPage.nextButton.click();
        browser.pause(5000);
        businessPage.nextButton.click();
        browser.pause(15000);
        businessPage.noButton.click();
        browser.pause(5000);
        businessPage.nextButton.click();
        browser.pause(5000);
    })
    it("Fill Sign-up form", () =>{
        businessPage.getFirstNameInput().setValue(stringValues.user_name);
        businessPage.getLastNameInput().setValue(stringValues.user_lastname);
        businessPage.getWorkEmailInput().setValue(stringValues.user_email);
        businessPage.getPhoneNumberInput().setValue(stringValues.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton.click();
        browser.pause(5000);
    })
    it("Set payrolls amounts", () =>{

        
    })
})