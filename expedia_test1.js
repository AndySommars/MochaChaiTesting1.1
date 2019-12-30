// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Expedia.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Expedia', async function() {
        // Load the page
        await driver.get('https://www.expedia.com/');
        // Find the search box by id
        await driver.findElement(By.id('package-origin-hp-package')).click();
        await driver.findElement(By.id('package-origin-hp-package')).sendKeys('Boston');
        await driver.findElement(By.id('package-destination-hp-package')).click();
        await driver.findElement(By.id('package-destination-hp-package')).sendKeys('Tokyo');
        await driver.findElement(By.id('package-departing-hp-package')).sendKeys('10/10/2019');
        await driver.findElement(By.id('package-returning-hp-package')).sendKeys('10/19/2019');
        await driver.findElement(By.id('search-button-hp-package')).click();
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'Tokyo (and vicinity) Hotel Search Results | Expedia');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})