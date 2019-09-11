const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports={ 
    /*login : function (driver,sfusername,sfpassword){
        console.log('Here');
        console.log(driver);
        return new Promise((resolve, reject) => {
            driver.get("http://test.salesforce.com").then(
                driver.wait(until.elementLocated(By.id('username')),15000).then(
                    driver.findElement(By.id('username')).sendKeys(sfusername).then(
                        driver.wait(until.elementLocated(By.id('password')),15000).then(
                            driver.findElement(By.id('password')).sendKeys(sfpassword).then(
                                driver.wait(until.elementLocated(By.id('Login')),15000).then(
                                    driver.findElement(By.id("Login")).click().then(function(){
                                        resolve('Success');
                                    } 
                                            ).catch(function(error){
                                                reject(error);
                                            })
                                    ).catch(function(error){
                                        reject(error);
                                    })
                            ).catch(function(error){
                                reject(error);
                            })
                        ).catch(function(error){
                            reject(error);
                        })
                    ).catch(function(error){
                        reject(error);
                    })
                ).catch(function(error){
                    reject(error);
                })
            ).catch(function(error){
                reject(error);
            });
        }).catch(function(error){
            reject(error);
        })
        
    }*/

    login : async function (driver,sfusername,sfpassword){
        console.log('we got here');
        await driver.get("http://test.salesforce.com");
        await driver.wait(until.elementLocated(By.id('username')),15000);
        await driver.findElement(By.id('username')).sendKeys(sfusername);
        await driver.wait(until.elementLocated(By.id('password')),15000);
        await driver.findElement(By.id('password')).sendKeys(sfpassword);
        await driver.wait(until.elementLocated(By.id('Login')),15000);
        await driver.findElement(By.id("Login")).click();

    }
}