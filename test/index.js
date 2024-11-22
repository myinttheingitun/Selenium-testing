import { By, Key, Builder, until } from "selenium-webdriver";
import "chromedriver";


 

async function example(){


    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
 
    //To fetch http://google.com from the browser with our code.
    await driver.get("file:///C:/Users/dell/Desktop/food%20order%20project/09-Omnifood-Optimizations/index.html");
    

    
    // Test 1: Verify if the title of the webpage is correct
    const title = await driver.getTitle();
    const expectedTitle = 'Omnifood — Never cook again!';

    if (title === expectedTitle) {
        console.log(`Test 1 Passed: Title is correct - ${title === expectedTitle}`);
    } else {
        console.log(`Test 1 Failed: Title is incorrect - Expected title: ${expectedTitle}, Actual title: ${title}`);
    }

    await driver.sleep(2000);
    //Test 2: Click on Button
        
        await driver.wait(until.elementLocated(By.css('a.btn:nth-child(3)[href="#cta"]')), 50000);
        await driver.findElement(By.css('a.btn:nth-child(3)[href="#cta"]')).click();
        console.log('Test 2 Passed: "Start eating well" button clicked');

    // Introduce a delay of 2 seconds (2000 milliseconds)
        await driver.sleep(2000);

    //Test3: Click on Button
        
        await driver.wait(until.elementLocated(By.css('a.btn:nth-child(4)[href="#how"]')), 50000);
        await driver.findElement(By.css('a.btn:nth-child(4)[href="#how"]')).click();
        console.log('Test 3 Passed: "Learn more" button clicked');

        await driver.sleep(2000);


    // Test 4: Find an element and interact with it (for example, clicking a link)
    
     await driver.findElement(By.linkText('Testimonials')).click();
     console.log('Test 4 Passed: Link clicked');

    
     await driver.sleep(3000);

    // Test 5: Find an element and interact with it (for example, clicking a link)
    await driver.get("file:///C:/Users/dell/Desktop/food%20order%20project/09-Omnifood-Optimizations/index.html"); 
    await driver.findElement(By.linkText('See all recipes →')).click();
    console.log('Test 5 Passed: See all receipes Link clicked');

        


    // Introduce a delay to observe the actions performed on the browser
        await new Promise(resolve => setTimeout(resolve, 10000)); // Delay for 10 seconds
        await driver.quit();

    


    
}
example();