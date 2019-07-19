import businessPage from "../pages/BusinessPage";
var stringValues = require("../values/strings.json");
import allureReporter from "@wdio/allure-reporter";

describe("Smoke Testing", function() {
    it("Create a business", () => {
        allureReporter.addStory("This is my story");
        allureReporter.addStep("Go to glow page", [businessPage.visit()]);

        allureReporter.addStep("Insert business name");
        businessPage.getNameInput.setValue(stringValues.company_name);
        allureReporter.addStep("Select name from dropdown");
        businessPage.getNameDropDown.click();
        allureReporter.addStep("Click on next button");
        businessPage.primaryButton.click();
        allureReporter.addStep("Insert business address");
        businessPage.getAddressInput.setValue(stringValues.company_address);
        allureReporter.addStep("Select business address from dropdown");
        businessPage.selectDropDownByIndex().click();
        allureReporter.addStep("Confirm address");
        businessPage.getAddressConfirmationLabel;
        businessPage.primaryButton.click();
        allureReporter.addStep("Select Industry");
        businessPage.selectIndustry("Stores").click();
        businessPage.nextButton.click();
        allureReporter.addStep("Select Category")
        businessPage.selectCategory("Art, Craft and Party Supplies").click()
        businessPage.nextButton.click();
        

        browser.pause(5000)

    });
});
