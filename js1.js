const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();

options.addArguments('--disable-extensions');
options.addArguments('--disable-infobars');
options.addArguments('--disable-dev-shm-usage');
options.addArguments('--disable-browser-side-navigation');
options.addArguments('--no-sandbox');
options.addArguments('--ignore-certificate-errors');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        await driver.get('https://www.stackoverflow.com/');
        await driver.getPageSource().then(function(html) {
        console.log(html);
    	});
    } finally {
        await driver.quit();
    }
})();
