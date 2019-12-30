// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Kayak.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Kayak', async function() {
        // Load the page
        await driver.get('https://www.kayak.com/');
        // Find the search box by id
        await driver.executeScript(`document.querySelector("#y49d-origin-airport")`);
        //await driver.findElement(By.name('origin')).sendKeys('Boston');
        await driver.executeScript(`document.querySelector("#y49d-destination-airport")`);
        //await driver.findElement(By.id('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#y49d-depart")`);
        await driver.executeScript(`document.querySelector("#y49d-return-input")`);
        await driver.executeScript(`document.querySelector("#y49d-submit")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Book now: BOS to TYO, 10/10 — 10/19');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})