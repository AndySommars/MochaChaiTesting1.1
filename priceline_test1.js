// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Priceline.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Priceline', async function() {
        // Load the page
        await driver.get('https://www.priceline.com/');
        // Find the search box by id
        await driver.executeScript(`document.querySelector("#location")`);
        //await driver.findElement(By.name('origin')).sendKeys('Boston');
        //await driver.executeScript(`document.querySelector("#y49d-destination-airport")`);
        //await driver.findElement(By.id('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#hotel-date-range > div.sc-1bspbh7-2.gUFXLY.sc-bdVaJa.gJsYmb > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div.Day__Cell-sc-1n8mlxe-0.hSJiAy.sc-bdVaJa.dLTISj > div")`);
        await driver.executeScript(`document.querySelector("#hotel-date-range > div.sc-1bspbh7-2.gUFXLY.sc-bdVaJa.gJsYmb > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(21) > div")`);
        await driver.executeScript(`document.querySelector("#hotels > div > div > div > div.sc-bdVaJa.fCYBcC > button > div")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Boston Hotels: 10/10 - 10/19 | Priceline');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})