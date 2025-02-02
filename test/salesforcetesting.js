// This is a very helpful cheat sheet for xpath https://devhints.io/xpath
// Here is the documentation on Selenium for Node/JS - https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
let conf = require('../config/default.js');
let {Builder,By,Key,until,driver,firefox} = require('../drivers/driver');
let loginToSalesforce = require('../utils/loginToSalesforce.js');
let salesforceIntegration = require('../utils/salesforceIntegration.js');
var assert = require('chai').assert;

console.log(loginToSalesforce);
console.log(conf);
console.log(driver);
let sfusername = conf.SFDC_USERNAME;
let sfpassword = conf.SFDC_PASSWORD;



describe('we should login to salesforce', function(){
    this.timeout(0);
    it('Tear down salesforce data', async function(){
        var x  = await salesforceIntegration.tearDownSalesforceShapeData();
        assert(true,'Its true');
    });

    it('Login to Salesforce', async function(){
        
        await driver.get("http://test.salesforce.com");
        await driver.wait(until.elementLocated(By.id('username')),15000);
        await driver.findElement(By.id('username')).sendKeys(sfusername);
        await driver.wait(until.elementLocated(By.id('password')),15000);
        await driver.findElement(By.id('password')).sendKeys(sfpassword);
        await driver.wait(until.elementLocated(By.id('Login')),15000);
        await driver.findElement(By.id("Login")).click();
        assert(true,'Its true');

    });

    it('Login to geopointe', async function(){
        await delay(5000);
        await driver.wait(until.elementLocated(By.className('slds-icon-waffle')),15000);
        await driver.findElement(By.className('slds-icon-waffle')).click();
        await driver.wait(until.elementLocated(By.linkText('SmartRates')),15000);
        await driver.findElement(By.linkText('SmartRates')).click();
        await driver.wait(until.stalenessOf(driver.findElement(By.className('modal-header slds-modal__header'))),15000);
        await delay(5000);
        await driver.wait(until.elementLocated(By.xpath('//a[starts-with(@href, \'/lightning/n/geopointe__Map\')]')),15000);
        await driver.findElement(By.xpath('//a[starts-with(@href, \'/lightning/n/geopointe__Map\')]')).click();
        await delay(5000);
        assert(true,'we need to create a better assert');
    });


    it('Login to geopointe', async function(){
        let iframe = await driver.wait(until.elementLocated(By.tagName('iframe'),15000));
        driver.switchTo().frame(iframe);
        await driver.wait(until.elementLocated(By.id('gp_placesSearchString')),25000);    
        await driver.findElement(By.id('gp_placesSearchString')).sendKeys('St. Louis, MO, USA');
        await delay(5000);
        await driver.findElement(By.id('searchNow')).click();
        await delay(5000);
        let imgs = await driver.findElements(By.tagName('img'));
        for(var i=0;i<imgs.length;i++){
            var srcAtt = await imgs[i].getAttribute('src');
            console.log(srcAtt);
            console.log(typeof srcAtt);

            if(srcAtt.includes('Pin.png')){
                await imgs[i].click().then(()=>{
                    console.log('Here');
                },
                ()=>{
                    imgs[i+1].click();
                });
            }
        }
        await driver.findElement(By.linkText('Start Market Adjustment Shape')).click();
        await delay(5000);

        let newIframe = await driver.wait(until.elementLocated(By.id('createIframe'),10000));
        console.log(newIframe);
        driver.switchTo().frame(newIframe);
        await delay(3000);
        let inps =  await driver.findElements(By.xpath('//div[@class="slds-form-element__control"]//input'));
        console.log(inps);
        for(var i=0;i<inps.length;i++){
            console.log(inps[i]);
            var inpDisplayed = await inps[i].isDisplayed();
            if(inpDisplayed){
                await inps[i].sendKeys('123').then(()=>{
                    console.log('success');
                },
                ()=>{
                    console.log('error');
                });
            }
            
        }
        driver.switchTo().parentFrame();
        await driver.findElement(By.id('saveButton')).click();
        await delay(3000);
        await driver.findElement(By.linkText('Market Adjustment Shape (All)')).click();
    });
});

const delay = ms => new Promise(res => setTimeout(res, ms));

function errorHandler(error){
    console.log(error); 
}