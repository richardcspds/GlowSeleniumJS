// var webdriver = require('selenium-webdriver');
// var test = require('selenium-webdriver/testing');
// var glowPage = require('../pages/PageFactory')
//var sleep = require('sleep');

// import assert from "assert";
// var businessPage = require("../pages/BusinessPage");
import businessPage from "../pages/BusinessPage";

describe("Smoke Testing", function() {
    console.log(businessPage.NAME_INPUT);

    it("Set business name", function() {
        browser.url("http://apply.staging.glow.co");
        browser.waitUntil(() => {
            console.log();
            return businessPage.NAME_INPUT.waitForExist();
        });
        businessPage.NAME_INPUT.setValue("Domo");
        businessPage.PRIMARY_BUTTON.keys("\uE007");
        browser.pause(5000);
    });
});