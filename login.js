describe('test the login functionality',function()
{
    var until = protractor.ExpectedConditions;
    var menu=element(by.buttonText('MENU'));
    var url='https://ilb-sqa-portal.ci.olivetech.com/home';
    var loginFromMenu=element(by.linkText("Login"));
    var email=element(by.id("email"));
    var password=element(by.id("password"));
    var RememberMe=element(by.id("rememberMe-input"));
    var Login=element(by.buttonText("LOGIN"));
    var Back=element(by.buttonText("BACK"));

    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.waitForAngular(true);
        browser.driver.manage().window().maximize();
    
    })
     it('login using menu',function()
      {
        menu.click();
        browser.driver.sleep(50000);
        console.log('clicked menu');
        loginFromMenu.click();
        //browser.wait(until.elementToBeClickable(loginFromMenu,5000,'no element to be clickable'));    
        email.click().clear().sendKeys("sridevi@olivetech.net");
    
       console.log("success")

              password.click().clear().sendKeys("Satvikakil9");
        Login.click();
        browser.sleep(60000);
        console.log("login checked");
      });
  
});