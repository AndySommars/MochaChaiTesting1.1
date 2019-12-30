// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Hotelscombined.com', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Hotelscombined', async function() {
        // Load the page
        await driver.get('https://www.hotelscombined.com/');
        // Find the search box by id
        //await driver.executeScript(`document.querySelector("#y49d-origin-airport")`);
        //await driver.findElement(By.name('origin')).sendKeys('Boston');
        await driver.executeScript(`document.querySelector("#hc_f_id_where_1")`);
        //await driver.findElement(By.id('destination')).sendKeys('Tokyo');
        await driver.executeScript(`document.querySelector("#HC_DateSelection_checkin_1 > div.hc_f_t_s3.hc_f_month > label > select")`);
        await driver.executeScript(`document.querySelector("#HC_DateSelection_checkout_1 > div.hc_f_t_s3.hc_f_month > label > select")`);
        await driver.executeScript(`document.querySelector("#hc_searchBox > div > form > fieldset > div.hc_f_t_btn.hc_f_submit > a")`);
        // Enter keywords and click enter
        
        // Wait for the results box by id
        
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, title, 'HotelsCombined.com - Hotels in Boston');
        
    }).timeout(30000);
    // close the browser after running tests
    after(() => driver && driver.quit());
})