# AutomatedTesting
This repo contains a basic set up for running automated tests using Node JS + Selenium. It also provides capability for connecting to 
BrowserStack and LamdaTest which provide hosted Selenium Grids and simplify testing on multiple different browsers. These are paid tools so you will 
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