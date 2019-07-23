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
            // browser.pause(5000);
    })
})