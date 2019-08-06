/* eslint-disable no-undef */
import businessPage from "../pages/BusinessPage"
import calendarFragment from "../pages/fragments/calendarFragment"
import sliderFragment from "../pages/fragments/sliderFragments"
var stringValues = require("../values/strings.json")
import allureReporter from "@wdio/allure-reporter"
import { brotliCompressSync } from "zlib";

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
        browser.pause(2500);
        calendarFragment.setPolicyDateWeeks(2)
        businessPage.nextButton.click()
        browser.pause(1500);

    })
    it("Answer form questions", () => {

        // sliderFragment.moveIt(20);
        businessPage.getEmployeesQuestionLabel();
        browser.pause(2500);
        sliderFragment.setSliderValue(20); //number of employees
        businessPage.nextButton.click();
        browser.pause(3000);
        // sliderFragment.moveIt(2010);
        sliderFragment.setSliderValue(2010); //year founded
        businessPage.nextButton.click();
        browser.pause(2500);
        sliderFragment.setSliderValue(1); //weight limiy
        businessPage.nextButton.click();
        browser.pause(2500);
        businessPage.noButton.click(); // delivery
        browser.pause(2500);
        sliderFragment.setSliderValue("6:00 pm"); //closing time
        businessPage.nextButton.click();
        browser.pause(2500);
        sliderFragment.setSliderValue(7000); //place space
        businessPage.nextButton.click();
        browser.pause(20000);
        businessPage.getXmodQuestionLabel();
        businessPage.noButton.click(); //xMod
        browser.pause(2500);
        businessPage.nextButton.click(); // claims no.
        browser.pause(2500);
    })
    it("Fill Sign-up form", () => {
        businessPage.getFirstNameInput().setValue(stringValues.user_name);
        businessPage.getLastNameInput().setValue(stringValues.user_lastname);
        businessPage.getWorkEmailInput().setValue(stringValues.user_email);
        businessPage.getPhoneNumberInput().setValue(stringValues.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton.click();
        browser.pause(5000);
    })
    it("Set payrolls amounts", () => {
        sliderFragment.setSliderValue("$10K", 1)
        sliderFragment.setSliderValue("$5K", 2)
        sliderFragment.setSliderValue("$5K", 3)
        businessPage.nextButton.click()
        browser.pause(8000);
    })
})