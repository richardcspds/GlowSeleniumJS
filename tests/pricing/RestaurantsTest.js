/* eslint-disable no-undef */
import businessPage from "../../pages/BusinessPage"
import calendarFragment from "../../pages/fragments/calendarFragment"
import sliderFragment from "../../pages/fragments/sliderFragments"
import allureReporter from "@wdio/allure-reporter"
import pricingScenarios from "../../pages/scenarios/pricingRestaurants.json"

describe("Pricing Restaurants", function() {

    it("R2", () => {

        var scenario = pricingScenarios[1]
        allureReporter.addArgument("URL", businessPage.getURL)
        allureReporter.addStep("Go to glow page", [businessPage.visit()])
        allureReporter.addStep("Insert business name")
        businessPage.getNameInput().setValue(scenario.business_name)
        allureReporter.addStep("Select name from dropdown")
        businessPage.getNameDropDown.click()
        allureReporter.addStep("Click on next button")
        businessPage.primaryButton.click()

        allureReporter.addStep("Insert business address")
        businessPage.getAddressInput().setValue(scenario.address)
        allureReporter.addStep("Select business address from dropdown")
        businessPage.selectDropDownByIndex().click()
        allureReporter.addStep("Confirm address",
            businessPage.getAddressConfirmationLabel()
        )

        businessPage.primaryButton.click()
        allureReporter.addStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton.click()
        allureReporter.addStep("Select Category")
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton.click()

        browser.pause(2500);
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton.click()

        // Sliders

        businessPage.getEmployeesQuestionLabel();
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton.click();
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton.click();
        businessPage.noButton.click(); // delivery
        browser.pause(4000);
        businessPage.noButton.click(); // Music
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton.click();
        browser.pause(4000);
        businessPage.yesButton.click(); // Fryer
        browser.pause(4000);
        businessPage.yesButton.click(); // Grease trap
        businessPage.getXmodQuestionLabel();
        businessPage.noButton.click(); //xMod TODO: Add variable with the escenarios
        browser.pause(4000);
        businessPage.nextButton.click(); // claims no.
        browser.pause(2500);

        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton.click();
        // browser.pause(5000);
        sliderFragment.setSliderValue("$30K", 0)
        sliderFragment.setSliderValue("$5K", 1)
        sliderFragment.setSliderValue("$0K", 2)
        businessPage.nextButton.click()
            // businessPage.submitButton.click()
        browser.pause(16000);


    })
})