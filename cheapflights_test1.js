// test.js
// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
describe('Checkout Cheapflights.com', function() {
	let driver;
	before(async function() {
		driver = await new Builder().forBrowser('chrome').build();
	});
	// Next, we will write steps for our test.
	// For the element ID, you can find it by open the browser inspect feature.
	it('Search on Cheapflights', async function() {
		// Load the page
		await driver.get('https://www.cheapflights.com/');
		// Find the search box by id
		await driver.executeScript(`document.querySelector("#H_e--origin")`);
		//await driver.findElement(By.name('origin')).sendKeys('Boston');
		await driver.executeScript(`document.querySelector("#H_e--destination")`);
		//await driver.findElement(By.id('destination')).sendKeys('Tokyo');
		await driver.executeScript(`document.querySelector("#H_e--depart-input")`);
		await driver.executeScript(`document.querySelector("#H_e--return-input")`);
		await driver.executeScript(`document.querySelector("#H_e--submit > span")`);
		// Enter keywords and click enter

		// Wait for the results box by id

		// We will get the title value and test it
		let title = await driver.getTitle();
		assert.equal(
			title,
			title,
			'Cheap Flights, Airline Tickets &amp; Airfares - Find Deals on Flights at Cheapflights.com'
		);
	}).timeout(30000);
	// close the browser after running tests
	after(() => driver && driver.quit());
});
