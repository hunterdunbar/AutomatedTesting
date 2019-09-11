require('dotenv').config();
module.exports = {
    RUN_MODE : process.env.RUN_MODE,
    SFDC_USERNAME : process.env.SFDC_USERNAME,
    SFDC_PASSWORD : process.env.SFDC_PASSWORD,
    GRID_URL : process.env.GRID_URL,
    SF_URL : process.env.SF_URL,
    BROWSERSTACK_USER : process.env.BROWSERSTACK_USER,
    BROWSERSTACK_KEY : process.env.BROWSERSTACK_KEY

}