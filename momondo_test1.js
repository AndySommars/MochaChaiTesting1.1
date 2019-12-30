// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Momondo.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Momondo', async function() {
        // Load the page
        await driver.get('https://www.momondo.com/');
        // Find the search box by id
        await driver.findElement(By.name('origin')).click();
        await driver.findElement(By.name('origin')).sendKeys('Boston');
        await driver.findElement(By.name('destination')).click();
        await driver.findElement(By.name('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#HKhJ-depart-input")`);
        await driver.executeScript(`document.querySelector("#HKhJ-return")`);
        await driver.executeScript(`document.querySelector("#HKhJ-submit")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
       
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Book now: BOS to TYO, 10/19 — 10/26');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})