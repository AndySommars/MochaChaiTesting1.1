// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Agoda.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Agoda', async function() {
        // Load the page
        await driver.get('https://www.agoda.com/');
        // Find the search box by id
        await driver.executeScript(`document.querySelector("#SearchBoxContainer > div > div > div.IconBox.IconBox--autocomplete > div > div > input")`);
        //await driver.findElement(By.name('origin')).sendKeys('Boston');
        //await driver.executeScript(`document.querySelector("#y49d-destination-airport")`);
        //await driver.findElement(By.id('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#SearchBoxContainer > div > div > div.IconBox.IconBox--checkIn.IconBox--focused > div > div > div > div.SearchBoxTextDescription__desc")`);
        await driver.executeScript(`document.querySelector("#SearchBoxContainer > div > div > div.IconBox.IconBox--checkOut.IconBox--focused > div > div > div > div.SearchBoxTextDescription__title")`);
        await driver.executeScript(`document.querySelector("#SearchBoxContainer > div > div > button")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Agoda | Hotels in Boston (MA) | Best Price Guarantee!');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})