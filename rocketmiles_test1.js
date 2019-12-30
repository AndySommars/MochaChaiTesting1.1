// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Rocketmiles.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Rocketmiles', async function() {
        // Load the page
        await driver.get('https://www.rocketmiles.com/');
        // Find the search box by id
        await driver.executeScript(`document.querySelector("#rm3-home-page > div.content.ng-scope > div.container-fluid.search-section.ng-scope > div:nth-child(4) > div > form > div.col-sm-6.region.search-field > gofr-location-search > div > input")`);
        //await driver.findElement(By.name('origin')).sendKeys('Boston');
        await driver.executeScript(`document.querySelector("#rm3-home-page > div.content.ng-scope > div.container-fluid.search-section.ng-scope > div:nth-child(4) > div > form > div.col-sm-6.program.search-field.ng-scope > gofr-program-autosuggest > div > input")`);
        //await driver.findElement(By.id('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#dp1568932500417")`);
        await driver.executeScript(`document.querySelector("#dp1568932500418")`);
        await driver.executeScript(`document.querySelector("#rm3-home-page > div.content.ng-scope > div.container-fluid.search-section.ng-scope > div:nth-child(4) > div > form > div.submit.col-md-12 > button")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Rocketmiles - Hotel search result');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})