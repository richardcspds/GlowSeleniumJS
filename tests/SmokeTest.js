'use strict'
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require('assert');
var glowPage = require('../pages/PageFactory')
//var sleep = require('sleep');

describe('Smoke Testing', function(){

    it('Set business name', function(){
        browser.url('http://apply.staging.glow.co')
        assert.ok(glowPage.businessPage.atBusinessNameScreen())
        driver.findElement({xpath: "//*[@placeholder ='Business Name']"}).sendKeys('Domo');
        driver.findElement({id: "CTA"}).click();
        driver.findElement({xpath: "//*[@placeholder = 'Business Address']"}).isDisplayed().then(function(elementDisplayed){
            assert.equal(elementDisplayed, true, 'Address input not shown');
        });
        glowPage.businessPage.visit('http://apply.staging.glow.co')       
    });
});



