
//install chromedriver (chrome) and geckodriver (firefox)



var webdriver = require('selenium-webdriver');
// set up and build selenium driver object


function searchExpedia() {
    //open browser
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    //navigate to a url, search for a text and get title of page
    driver.get('https://www.expedia.com/').then(function()
    {
        driver.findElement(webdriver.By.id('package-origin-hp-package')).click().then(function()
        {

            driver.findElement(webdriver.By.id('package-origin-hp-package')).sendKeys('Boston').then(function()
            {
                driver.findElement(webdriver.By.id('package-destination-hp-package')).click().then(function()
                {
                    driver.findElement(webdriver.By.id('package-destination-hp-package')).sendKeys('Tokyo').then(function()
                    {
                        driver.findElement(webdriver.By.id('package-departing-hp-package')).sendKeys('10/10/2019').then(function()
                        {
                            driver.findElement(webdriver.By.id('package-returning-hp-package')).sendKeys('10/19/2019').then(function()
                            {

                                driver.findElement(webdriver.By.id('search-button-hp-package')).click().then(function()
                                {

                                    driver.getTitle().then(function(title)
                                    {
                                        setTimeout(function()
                                        {
                                            console.log(title);
                                            driver.quit();
                                        },  15000);
                        
                        
                                    });
                                });
                            });   
                        });

                    });
                
                });
            });
        });
    });

}

searchExpedia();