import { By, Key, Builder, until } from "selenium-webdriver";
import "chromedriver";


 

async function example(){

    var searchString = 'Lisa';

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
 
    //To fetch http://google.com from the browser with our code.
    await driver.get("https://www.google.com");
    // await driver.get("file:///C:/Users/dell/Desktop/food%20order%20project/09-Omnifood-Optimizations/index.html");
    

    
    // Test 1: Verify if the title of the webpage is correct
    const title = await driver.getTitle();
    const expectedTitle = 'Google';

    if (title === expectedTitle) {
        console.log(`Test 1 Passed: Title is correct - ${title === expectedTitle}`);
    } else {
        console.log(`Test 1 Failed: Title is incorrect - Expected title: ${expectedTitle}, Actual title: ${title}`);
    }


    // Test 2: Type a search query and submit
    await driver.findElement(By.name('q')).sendKeys(searchString, Key.ENTER);
    console.log('Test 2 Passed: Search query submitted');

    // Wait for the search results to appear
    await driver.wait(until.elementsLocated(By.css('#search .g')), 10000);

    // Test 3: Verify if search results are displayed
    const searchResults = await driver.findElements(By.css('#search .g'));
    console.log(`Test 3 Passed: Search results displayed - ${searchResults}`);

    // Test 4: Find an element and interact with it (for example, clicking a link)
        await driver.get("https://www.selenium.dev");
        await driver.findElement(By.linkText('Documentation')).click();
        console.log('Test 4 Passed: Link clicked');

        await driver.sleep(2000);
    
    // Test 5: Find an element and interact with it (for example, clicking a link)
        await driver.get("https://www.google.com");
        await driver.findElement(By.linkText('English')).click();
        console.log('Test 5 Passed: English Language clicked');


    //Test 6: Click on the Google Search Button
        
        await driver.wait(until.elementLocated(By.css('.FPdoLc > center:nth-child(1) > input:nth-child(1)[name="btnK"]')), 50000);
        await driver.findElement(By.css('.FPdoLc > center:nth-child(1) > input:nth-child(1)[name="btnK"]')).click();
        console.log('Test 6 Passed: "Google Search" button clicked');

        await driver.sleep(2000);

    //Test 7: Click on the I'm Feeling Lucky Button
        await driver.wait(until.elementLocated(By.css('.FPdoLc > center:nth-child(1) > input:nth-child(2)[name="btnI"]')), 50000);
        await driver.findElement(By.css('.FPdoLc > center:nth-child(1) > input:nth-child(2)[name="btnI"]')).click();
        console.log('Test 7 Passed: "I am Feeling Lucky" button clicked');
    
        


    // Introduce a delay to observe the actions performed on the browser
    await new Promise(resolve => setTimeout(resolve, 10000)); // Delay for 10 seconds
    await driver.quit();

    


    
}
example();