/* eslint-disable no-undef */
import businessPage from "../../pages/BusinessPage"
import calendarFragment from "../../pages/fragments/calendarFragment"
import sliderFragment from "../../pages/fragments/sliderFragments"
import allureReporter from "@wdio/allure-reporter"
import pricingScenarios from "../../pages/scenarios/pricingRestaurants.json"
import estimatePage from '../../pages/EstimatePage';

describe("Pricing Restaurants", function() {

    it("R2 @smoke", () => {

        var scenario = pricingScenarios[4]      
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")

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

        allureReporter.startStep("Confirm address")        
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.endStep()

        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton().click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton().click()
        businessPage.getPolicyStartLabel()
        allureReporter.endStep()

        allureReporter.startStep("Select Policy Start Date")        
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton().click()
        businessPage.getEmployeesQuestionLabel();
        allureReporter.endStep()

        allureReporter.startStep("Answer Industry questions")        
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton().click();
        if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
            businessPage.getAlcoholCookFoodQuestion()
            businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
        }
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton().click();
        businessPage.getCateringQuestion();
        businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.yesNoButton(scenario.live_music).click(); // Music
        businessPage.getClosingTimeQuestion()
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton().click();
        if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
            (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
                businessPage.getbouncersQuestion()
                businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
        }
        if (scenario.category != "Coffee Shop or Café" || 
            (scenario.alcohol_cook_food == "Yes" && 
                (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
            businessPage.getFryerQuestion();
            businessPage.yesNoButton(scenario.fryer).click(); // Fryer
        }
        if (scenario.fryer == "Yes"){
            businessPage.getGreaseQuestion();
            businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
        }
        businessPage.getXmodQuestion();
        businessPage.yesNoButton(scenario.x_mod).click(); // xMod
        if (scenario.x_mod == "Yes"){
            businessPage.getXmodScoreQuestion()
            sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
        }
        businessPage.getClaimsLast4YearsQuestion()
        sliderFragment.setSliderValue(scenario.claims_last_4_years);
        businessPage.nextButton().click(); // claims no.
        if (scenario.claims_last_4_years > 0){
            businessPage.getClaims100kQuestion()
            businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
        }        
        businessPage.getQuoteIsReady();
        allureReporter.endStep()

        allureReporter.startStep("Fill Sign-up form")        
        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton().click();                
        businessPage.getMonthlyPayroll();
        allureReporter.endStep()

        allureReporter.startStep("Set Payroll")
        sliderFragment.setSliderValue(scenario.staff_payroll, 0)
        sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
        sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
        businessPage.nextButton().click();
        allureReporter.endStep()

        allureReporter.startStep("Get Estimate Values")
        estimatePage.getTotalEstimateAmountLabel()  
        estimatePage.getTotalEstimateAmount() 
        browser.pause(1500)     
        allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
        allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
        allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
        allureReporter.endStep()
    })

    it("R3 @smoke", () => {

        var scenario = pricingScenarios[4]      
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")

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

        allureReporter.startStep("Confirm address")        
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.endStep()

        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton().click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton().click()
        businessPage.getPolicyStartLabel()
        allureReporter.endStep()

        allureReporter.startStep("Select Policy Start Date")        
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton().click()
        businessPage.getEmployeesQuestionLabel();
        allureReporter.endStep()

        allureReporter.startStep("Answer Industry questions")        
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton().click();
        if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
            businessPage.getAlcoholCookFoodQuestion()
            businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
        }
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton().click();
        businessPage.getCateringQuestion();
        businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.yesNoButton(scenario.live_music).click(); // Music
        businessPage.getClosingTimeQuestion()
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton().click();
        if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
            (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
                businessPage.getbouncersQuestion()
                businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
        }
        if (scenario.category != "Coffee Shop or Café" || 
            (scenario.alcohol_cook_food == "Yes" && 
                (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
            businessPage.getFryerQuestion();
            businessPage.yesNoButton(scenario.fryer).click(); // Fryer
        }
        if (scenario.fryer == "Yes"){
            businessPage.getGreaseQuestion();
            businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
        }
        businessPage.getXmodQuestion();
        businessPage.yesNoButton(scenario.x_mod).click(); // xMod
        if (scenario.x_mod == "Yes"){
            businessPage.getXmodScoreQuestion()
            sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
        }
        businessPage.getClaimsLast4YearsQuestion()
        sliderFragment.setSliderValue(scenario.claims_last_4_years);
        businessPage.nextButton().click(); // claims no.
        if (scenario.claims_last_4_years > 0){
            businessPage.getClaims100kQuestion()
            businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
        }        
        businessPage.getQuoteIsReady();
        allureReporter.endStep()

        allureReporter.startStep("Fill Sign-up form")        
        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton().click();                
        businessPage.getMonthlyPayroll();
        allureReporter.endStep()

        allureReporter.startStep("Set Payroll")
        sliderFragment.setSliderValue(scenario.staff_payroll, 0)
        sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
        sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
        businessPage.nextButton().click();
        allureReporter.endStep()

        allureReporter.startStep("Get Estimate Values")
        estimatePage.getTotalEstimateAmountLabel()  
        estimatePage.getTotalEstimateAmount() 
        browser.pause(1500)     
        allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
        allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
        allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
        allureReporter.endStep()
    })

    it("R4 @smoke", () => {

        var scenario = pricingScenarios[4]      
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")

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

        allureReporter.startStep("Confirm address")        
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.endStep()

        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton().click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton().click()
        businessPage.getPolicyStartLabel()
        allureReporter.endStep()

        allureReporter.startStep("Select Policy Start Date")        
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton().click()
        businessPage.getEmployeesQuestionLabel();
        allureReporter.endStep()

        allureReporter.startStep("Answer Industry questions")        
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton().click();
        if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
            businessPage.getAlcoholCookFoodQuestion()
            businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
        }
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton().click();
        businessPage.getCateringQuestion();
        businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.yesNoButton(scenario.live_music).click(); // Music
        businessPage.getClosingTimeQuestion()
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton().click();
        if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
            (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
                businessPage.getbouncersQuestion()
                businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
        }
        if (scenario.category != "Coffee Shop or Café" || 
            (scenario.alcohol_cook_food == "Yes" && 
                (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
            businessPage.getFryerQuestion();
            businessPage.yesNoButton(scenario.fryer).click(); // Fryer
        }
        if (scenario.fryer == "Yes"){
            businessPage.getGreaseQuestion();
            businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
        }
        businessPage.getXmodQuestion();
        businessPage.yesNoButton(scenario.x_mod).click(); // xMod
        if (scenario.x_mod == "Yes"){
            businessPage.getXmodScoreQuestion()
            sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
        }
        businessPage.getClaimsLast4YearsQuestion()
        sliderFragment.setSliderValue(scenario.claims_last_4_years);
        businessPage.nextButton().click(); // claims no.
        if (scenario.claims_last_4_years > 0){
            businessPage.getClaims100kQuestion()
            businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
        }        
        businessPage.getQuoteIsReady();
        allureReporter.endStep()

        allureReporter.startStep("Fill Sign-up form")        
        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton().click();                
        businessPage.getMonthlyPayroll();
        allureReporter.endStep()

        allureReporter.startStep("Set Payroll")
        sliderFragment.setSliderValue(scenario.staff_payroll, 0)
        sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
        sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
        businessPage.nextButton().click();
        allureReporter.endStep()

        allureReporter.startStep("Get Estimate Values")
        estimatePage.getTotalEstimateAmountLabel()  
        estimatePage.getTotalEstimateAmount() 
        browser.pause(1500)     
        allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
        allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
        allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
        allureReporter.endStep()
    })

    it("R5 @smoke", () => {

        var scenario = pricingScenarios[4]      
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")

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

        allureReporter.startStep("Confirm address")        
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.endStep()

        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton().click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton().click()
        businessPage.getPolicyStartLabel()
        allureReporter.endStep()

        allureReporter.startStep("Select Policy Start Date")        
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton().click()
        businessPage.getEmployeesQuestionLabel();
        allureReporter.endStep()

        allureReporter.startStep("Answer Industry questions")        
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton().click();
        if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
            businessPage.getAlcoholCookFoodQuestion()
            businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
        }
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton().click();
        businessPage.getCateringQuestion();
        businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.yesNoButton(scenario.live_music).click(); // Music
        businessPage.getClosingTimeQuestion()
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton().click();
        if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
            (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
                businessPage.getbouncersQuestion()
                businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
        }
        if (scenario.category != "Coffee Shop or Café" || 
            (scenario.alcohol_cook_food == "Yes" && 
                (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
            businessPage.getFryerQuestion();
            businessPage.yesNoButton(scenario.fryer).click(); // Fryer
        }
        if (scenario.fryer == "Yes"){
            businessPage.getGreaseQuestion();
            businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
        }
        businessPage.getXmodQuestion();
        businessPage.yesNoButton(scenario.x_mod).click(); // xMod
        if (scenario.x_mod == "Yes"){
            businessPage.getXmodScoreQuestion()
            sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
        }
        businessPage.getClaimsLast4YearsQuestion()
        sliderFragment.setSliderValue(scenario.claims_last_4_years);
        businessPage.nextButton().click(); // claims no.
        if (scenario.claims_last_4_years > 0){
            businessPage.getClaims100kQuestion()
            businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
        }        
        businessPage.getQuoteIsReady();
        allureReporter.endStep()

        allureReporter.startStep("Fill Sign-up form")        
        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton().click();                
        businessPage.getMonthlyPayroll();
        allureReporter.endStep()

        allureReporter.startStep("Set Payroll")
        sliderFragment.setSliderValue(scenario.staff_payroll, 0)
        sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
        sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
        businessPage.nextButton().click();
        allureReporter.endStep()

        allureReporter.startStep("Get Estimate Values")
        estimatePage.getTotalEstimateAmountLabel()  
        estimatePage.getTotalEstimateAmount() 
        browser.pause(1500)     
        allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
        allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
        allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
        allureReporter.endStep()
    })

    it("R6 @smoke @smoke_t", () => {

        var scenario = pricingScenarios[5]      
        allureReporter.startStep("Go to glow page")
        businessPage.visit()
        allureReporter.endStep()
        allureReporter.addStep("Enter Business Info")

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

        allureReporter.startStep("Confirm address")        
        businessPage.getAddressConfirmationLabel()
        businessPage.primaryButton.click()
        allureReporter.endStep()

        allureReporter.startStep("Select Industry")
        businessPage.selectIndustry(scenario.industry).click()
        businessPage.nextButton().click()
        businessPage.selectCategory(scenario.category).click()
        businessPage.nextButton().click()
        businessPage.getPolicyStartLabel()
        allureReporter.endStep()

        allureReporter.startStep("Select Policy Start Date")        
        calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
        businessPage.nextButton().click()
        businessPage.getEmployeesQuestionLabel();
        allureReporter.endStep()

        allureReporter.startStep("Answer Industry questions")        
        sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
        businessPage.nextButton().click();
        if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
            businessPage.getAlcoholCookFoodQuestion()
            businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
        }
        businessPage.getsliderYearFounded();
        sliderFragment.setSliderValue(scenario.year_founded); //year founded
        businessPage.nextButton().click();
        businessPage.getCateringQuestion();
        businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
        businessPage.getEntertaimentQuestion()
        businessPage.yesNoButton(scenario.live_music).click(); // Music
        businessPage.getClosingTimeQuestion()
        sliderFragment.setSliderValue(scenario.latest_closing); //closing time
        businessPage.nextButton().click();
        if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
            (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
                businessPage.getbouncersQuestion()
                businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
        }
        if (scenario.category != "Coffee Shop or Café" || 
            (scenario.alcohol_cook_food == "Yes" && 
                (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
            businessPage.getFryerQuestion();
            businessPage.yesNoButton(scenario.fryer).click(); // Fryer
        }
        if (scenario.fryer == "Yes"){
            businessPage.getGreaseQuestion();
            businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
        }
        businessPage.getXmodQuestion();
        businessPage.yesNoButton(scenario.x_mod).click(); // xMod
        if (scenario.x_mod == "Yes"){
            businessPage.getXmodScoreQuestion()
            sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
        }
        businessPage.getClaimsLast4YearsQuestion()
        sliderFragment.setSliderValue(scenario.claims_last_4_years);
        businessPage.nextButton().click(); // claims no.
        if (scenario.claims_last_4_years > 0){
            businessPage.getClaims100kQuestion()
            businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
        }        
        businessPage.getQuoteIsReady();
        allureReporter.endStep()

        allureReporter.startStep("Fill Sign-up form")        
        businessPage.getFirstNameInput().setValue(scenario.user_name);
        businessPage.getLastNameInput().setValue(scenario.user_lastname);
        businessPage.getWorkEmailInput().setValue(scenario.user_email);
        businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
        businessPage.termsOfServicesCheckbox.click();
        businessPage.submitButton().click();                
        businessPage.getMonthlyPayroll();
        allureReporter.endStep()

        allureReporter.startStep("Set Payroll")
        sliderFragment.setSliderValue(scenario.staff_payroll, 0)
        sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
        sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
        businessPage.nextButton().click();
        allureReporter.endStep()

        allureReporter.startStep("Get Estimate Values")
        estimatePage.getTotalEstimateAmountLabel()  
        estimatePage.getTotalEstimateAmount() 
        browser.pause(1500)     
        allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
        allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
        allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
        allureReporter.endStep()
    })

    // Master Restaurant Pricing

    // var scenario = pricingScenarios[4]      
    //     allureReporter.startStep("Go to glow page")
    //     businessPage.visit()
    //     allureReporter.endStep()
    //     allureReporter.addStep("Enter Business Info")

    //     allureReporter.startStep("Insert business name")
    //     businessPage.getNameInput().setValue(scenario.business_name)
    //     allureReporter.endStep()     

    //     allureReporter.startStep("Select name from dropdown")
    //     businessPage.getNameDropDown.click()
    //     allureReporter.endStep()

    //     allureReporter.startStep("Click on next button")
    //     businessPage.primaryButton.click()
    //     allureReporter.endStep()

    //     allureReporter.startStep("Insert business address")
    //     businessPage.getAddressInput().setValue(scenario.address)
    //     allureReporter.endStep()

    //     allureReporter.startStep("Select business address from dropdown")
    //     businessPage.selectDropDownByIndex().click()
    //     allureReporter.endStep()

    //     allureReporter.startStep("Confirm address")        
    //     businessPage.getAddressConfirmationLabel()
    //     businessPage.primaryButton.click()
    //     allureReporter.endStep()

    //     allureReporter.startStep("Select Industry")
    //     businessPage.selectIndustry(scenario.industry).click()
    //     businessPage.nextButton().click()
    //     businessPage.selectCategory(scenario.category).click()
    //     businessPage.nextButton().click()
    //     businessPage.getPolicyStartLabel()
    //     allureReporter.endStep()

    //     allureReporter.startStep("Select Policy Start Date")        
    //     calendarFragment.setPolicyDateWeeks(scenario.policy_start_date)
    //     businessPage.nextButton().click()
    //     businessPage.getEmployeesQuestionLabel();
    //     allureReporter.endStep()

    //     allureReporter.startStep("Answer Industry questions")        
    //     sliderFragment.setSliderValue(scenario.numbers_employee); //number of employees
    //     businessPage.nextButton().click();
    //     if (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"){
    //         businessPage.getAlcoholCookFoodQuestion()
    //         businessPage.yesNoButton(scenario.alcohol_cook_food).click() // Alcohol Cook Food
    //     }
    //     businessPage.getsliderYearFounded();
    //     sliderFragment.setSliderValue(scenario.year_founded); //year founded
    //     businessPage.nextButton().click();
    //     businessPage.getCateringQuestion();
    //     businessPage.yesNoButton(scenario.delivery_catering).click(); // delivery
    //     businessPage.getEntertaimentQuestion()
    //     businessPage.yesNoButton(scenario.live_music).click(); // Music
    //     businessPage.getClosingTimeQuestion()
    //     sliderFragment.setSliderValue(scenario.latest_closing); //closing time
    //     businessPage.nextButton().click();
    //     if (sliderFragment.getClosingTimeTarget(scenario.latest_closing) >= 34 && (scenario.category != "Coffee Shop or Café" ||
    //         (scenario.category == "Coffee Shop or Café" && scenario.alcohol_cook_food == "Yes"))){
    //             businessPage.getbouncersQuestion()
    //             businessPage.yesNoButton(scenario.bouncers).click() // Bouncers
    //     }
    //     if (scenario.category != "Coffee Shop or Café" || 
    //         (scenario.alcohol_cook_food == "Yes" && 
    //             (scenario.category == "Coffee Shop or Café" || scenario.category == "Sandwich Shop or Salad Shop"))){
    //         businessPage.getFryerQuestion();
    //         businessPage.yesNoButton(scenario.fryer).click(); // Fryer
    //     }
    //     if (scenario.fryer == "Yes"){
    //         businessPage.getGreaseQuestion();
    //         businessPage.yesNoButton(scenario.grease_trap).click(); // Grease trap
    //     }
    //     businessPage.getXmodQuestion();
    //     businessPage.yesNoButton(scenario.x_mod).click(); // xMod
    //     if (scenario.x_mod == "Yes"){
    //         businessPage.getXmodScoreQuestion()
    //         sliderFragment.setSliderValue(scenario.x_mod_score) //xMod score
    //     }
    //     businessPage.getClaimsLast4YearsQuestion()
    //     sliderFragment.setSliderValue(scenario.claims_last_4_years);
    //     businessPage.nextButton().click(); // claims no.
    //     if (scenario.claims_last_4_years > 0){
    //         businessPage.getClaims100kQuestion()
    //         businessPage.yesNoButton(scenario.claims_100k).click();  // Claims 100K
    //     }        
    //     businessPage.getQuoteIsReady();
    //     allureReporter.endStep()

    //     allureReporter.startStep("Fill Sign-up form")        
    //     businessPage.getFirstNameInput().setValue(scenario.user_name);
    //     businessPage.getLastNameInput().setValue(scenario.user_lastname);
    //     businessPage.getWorkEmailInput().setValue(scenario.user_email);
    //     businessPage.getPhoneNumberInput().setValue(scenario.user_phone);
    //     businessPage.termsOfServicesCheckbox.click();
    //     businessPage.submitButton().click();                
    //     businessPage.getMonthlyPayroll();
    //     allureReporter.endStep()

    //     allureReporter.startStep("Set Payroll")
    //     sliderFragment.setSliderValue(scenario.staff_payroll, 0)
    //     sliderFragment.setSliderValue(scenario.outside_sales_payroll, 1)
    //     sliderFragment.setSliderValue(scenario.clerical_payroll, 2)
    //     businessPage.nextButton().click();
    //     allureReporter.endStep()

    //     allureReporter.startStep("Get Estimate Values")
    //     estimatePage.getTotalEstimateAmountLabel()  
    //     estimatePage.getTotalEstimateAmount() 
    //     browser.pause(1500)     
    //     allureReporter.addStep("Total Monthly Estimate: " + estimatePage.getTotalEstimateAmount())
    //     allureReporter.addStep("Total Workers' Compensation Estimate: " + estimatePage.getWorkersCompensationAmount())
    //     allureReporter.addStep("Total Accident Benefits Estimate: " + estimatePage.getAccidentBenefitsAmount())
    //     allureReporter.endStep()
})