# AutomatedTesting
This repo contains a basic set up for running automated tests using Node JS + Selenium. It also provides capability for connecting to 
[BrowserStack](https://www.browserstack.com/) and [LamdaTest](https://www.lambdatest.com/home?utm_expid=.FbS2moqWRe6nnnjN8T0fdA.1&utm_referrer=) which provide hosted Selenium Grids and simplify testing on multiple different browsers. These are paid tools so you will 
need to sign up for a free trial and obtain usernames/keys. 

## Running this locally
* Clone the repository to your local machine.
* Navigate to the root directory and run the following command to install node dependencies. If you do not have [NodeJS](https://nodejs.org/en/) installed on your local machine you will need to install it.
```
npm install
```
* Create a new file called .env in the root directory with the following values
```
RUN_MODE=LOCAL 
SFDC_USERNAME=<<sf username goes here>>
SFDC_PASSWORD=<<sf password goes here>
SF_URL=https://test.salesforce.com/
GRID_URL=<<if using lambda test, grid url from Lambda Test goes here>>
BROWSERSTACK_USER=<<Browser Stack User goes here>>
BROWSERSTACK_KEY=<<Browser Stack Key goes here>>
```
* Update the test/salesforcetesting.js file with your Webdriver tests. This will allow you to start writing Mocha tests with Chai assertions. If you want to do some basic testing you can utilize 
index.js in the root directory. 

## Running on Heroku
You can schedule and run your tests on Heroku daily. To do this:
* Create a new Heroku App
* Open the app and go to the settings tab and add a NodeJS buildpack
* Update the config variables with the appropriate environment variables defined above. 

Video Demonstration: 
[Part 1](https://www.screencast.com/t/0UP2eMeeSmE)
[Part 2 - this cuts off at 5 minutes but you get the idea](https://www.screencast.com/t/hIzpuIP23pB)

Additional Resources:
[Selenium](https://www.seleniumhq.org/)
[Selenium for Node](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
[Xpath for selecting dom elements](https://devhints.io/xpath)
[WebDriverIO - Node Wrapper for Selenium Webdriver](https://devhints.io/xpath)
[BrowserStack](https://www.browserstack.com/) 
[LamdaTest](https://www.lambdatest.com/home?utm_expid=.FbS2moqWRe6nnnjN8T0fdA.1&utm_referrer=)
[Good video on setting up webdriver. This guy's kinda funny.](https://www.youtube.com/watch?v=NJhZbY8UeFw)
