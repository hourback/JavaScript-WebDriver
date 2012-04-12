importClass(org.openqa.selenium.By);
importClass(org.openqa.selenium.WebDriver);
importClass(org.openqa.selenium.WebElement);
importClass(org.openqa.selenium.htmlunit.HtmlUnitDriver);

// Create a new instance of the html unit driver
// Notice that the remainder of the code relies on the interface,
// not the implementation.
var driver = new HtmlUnitDriver();

// And now use this to visit Google
driver.get("http://www.google.com");

// Find the text input element by its name
var element = driver.findElement(By.name("q"));

// Enter something to search for
element.sendKeys("Cheese!");

// Now submit the form. WebDriver will find the form for us from the element
element.submit();

// Check the title of the page
print("Page title is: " + driver.getTitle());
