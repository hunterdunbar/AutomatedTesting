const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
let conf = require('../config/default.js');

let driver;

let fireOptions = new firefox.Options().setPreference('dom.webnotifications.enabled', false)
    .setPreference("geo.enabled", false)
    .setPreference("geo.enabled", false)
    .setPreference("geo.provider.use_corelocation", false)
    .setPreference("geo.prompt.testing", false)
    .setPreference("geo.prompt.testing.allow", false);

if(conf.RUN_MODE == 'BROWSERSTACK'){
    var capabilities = {
        'browserName' : 'Firefox',
        'browser_version' : '67.0',
        'os' : 'OS X',
        'os_version' : 'Mojave',
        'resolution' : '1920x1080',
        'browserstack.user' : conf.BROWSERSTACK_USER,
        'browserstack.key' : conf.BROWSERSTACK_KEY,
        'name' : 'Bstack-[Node] Sample Test'
    } 
    driver = new Builder().
        usingServer('http://hub-cloud.browserstack.com/wd/hub').
        withCapabilities(capabilities).
        build();
}

if(conf.RUN_MODE == 'LOCAL'){
    driver = new Builder().forBrowser('firefox').setFirefoxOptions(fireOptions).build();
}

if(conf.RUN_MODE == 'LAMBDA'){
    const capabilities = {
    platform : "macOS Mojave",
    browserName : "Firefox",
    version: '67.0',
    resolution: '1920x1080',
    idleTimeout: 90,
    //  acceptInsecureCerts:true,
    network: false,
    visual: false,
    console: false,
    video: true,
    name: 'SmartRules v2', // name of the test
    build: 'Node Selenium - SmartRules' // name of the build
    };
    const gridUrl = conf.GRID_URL;
    driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
}


module.exports = {
    Builder,By,Key,until,driver,firefox
}