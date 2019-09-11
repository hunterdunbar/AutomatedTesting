# AutomatedTesting
This repo contains a basic set up for running automated tests using Node JS + Selenium. It also provides capability for connecting to 
[BrowserStack](https://www.browserstack.com/) and [LamdaTest](https://www.lambdatest.com/home?utm_expid=.FbS2moqWRe6nnnjN8T0fdA.1&utm_referrer=) which provide hosted Selenium Grids and simplify testing on multiple different browsers. These are paid tools so you will 
need to sign up for a free trial and obtain usernames/keys. 

## Running this locally
1. Clone the repository to your local machine.
1. Create a new file called .env in the root directory with the following values
```
RUN_MODE=LOCAL
SFDC_USERNAME=<<sf username goes here>>
SFDC_PASSWORD=<<sf password goes here>
SF_URL=https://test.salesforce.com/
GRID_URL=<<if using lambda test, grid url from Lambda Test goes here>>
BROWSERSTACK_USER=<<Browser Stack User goes here>>
BROWSERSTACK_KEY=<<Browser Stack Key goes here>>
```
1. Update the test/salesforcetesting.js file with your Webdriver tests. This will allow you to start writing Mocha tests with Chai assertions. If you want to do some basic testing you can utilize 
index.js in the root directory. 

## Running on Heroku
You can schedule and run your tests on Heroku daily. To do this:
1. Create a new Heroku App
1. Open the app and go to the settings tab and add a NodeJS buildpack
1. Update the config variables with the appropriate environment variables defined above

Video Demonstration: 