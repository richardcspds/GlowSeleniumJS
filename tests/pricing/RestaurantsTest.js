/* eslint-disable no-undef */
import businessPage from "../../pages/BusinessPage"
import calendarFragment from "../../pages/fragments/calendarFragment"
import sliderFragment from "../../pages/fragments/sliderFragments"
import allureReporter from "@wdio/allure-reporter"
import pricingScenarios from "../../pages/scenarios/pricingRestaurants.json"

describe("Pricing Restaurants", function() {

    it("R2 @smoke", () => {

        var scenario = pricingScenarios[1]
        allureReporter.addArgument("URL", businessPage.getURL)
        //allureReporter.addStep("Go to glow page", [businessPage.visit()])
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")
        allureReporter.startStep("Enter Business Info")
        allureReporter.startStep("Insert business name")
        businessPage.getNameInput().setValue(scenario.business_name)
        allureReporter.endStep()        
        allureReporter.startStep("Select name from dropdown")
        businessPage.getNameDropDown.click()
        allureReporter.endStep()
        allureReporter.startStep("Click on next button")
        businessPage.primaryButton.click()
        allureReporter.endStep()
        allureReporter.startStep("Insert business address")
        businessPage.getAddressInput().setValue(scenario.address)
        allureReporter.endStep()
        allureReporter.startStep("Select business address from dropdown")
        businessPage.selectDropDownByIndex().click()
        allureReporter.endStep()
        allureReporter.startStep("Confirm address",
            businessPage.getAddressConfirmationLabel()
        )

        businessPage.primaryButton.click()
        allureReporter.endStep()
        allureReporter.endStep()
        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton.click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton.click()
        allureReporter.endStep()
        allureReporter.startStep("Select Policy Start Date", 
            businessPage.getPolicyStartLabel()
        )
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton.click()
        allureReporter.endStep()

        // Sliders

        allureReporter.startStep("Answer Industry questions")
        businessPage.getEmployeesQuestionLabel();
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton.click();
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton.click();
        businessPage.getCateringQuestion();
        businessPage.noButton.click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.noButton.click(); // Music
        // sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        // businessPage.nextButton.click();
        // browser.pause(4000);
        // businessPage.yesButton.click(); // Fryer
        // browser.pause(4000);
        // businessPage.yesButton.click(); // Grease trap
        // businessPage.getXmodQuestionLabel();
        // businessPage.noButton.click(); //xMod TODO: Add variable with the escenarios
        // browser.pause(4000);
        // businessPage.nextButton.click(); // claims no.
        // browser.pause(2500);
        allureReporter.endStep()

        // businessPage.getFirstNameInput().setValue(scenario.user_name);
        // businessPage.getLastNameInput().setValue(scenario.user_lastname);
        // businessPage.getWorkEmailInput().setValue(scenario.user_email);
        // businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        // businessPage.termsOfServicesCheckbox.click();
        // businessPage.submitButton.click();
        // // browser.pause(5000);
        // sliderFragment.setSliderValue("$30K", 0)
        // sliderFragment.setSliderValue("$5K", 1)
        // sliderFragment.setSliderValue("$0K", 2)
        // businessPage.nextButton.click()
        //     // businessPage.submitButton.click()
        // browser.pause(16000);


    })
})