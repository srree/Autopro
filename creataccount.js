describe('Test create an account functionality',function()
{
    var url='https://ilb-sqa-portal.ci.olivetech.com/home';
    var menu=element(by.buttonText('MENU'));
    var CreateAccount=element(by.linkText("Create an Account"));
    var Email=element(by.id("mat-input-3"));
    var NextButton=element(by.buttonText('NEXT'));
    var BackButton=element(by.className('back'));
    var FirstName=element(by.id("first-name"));
    var LastName=element(by.id("last-name"));
    var PassWord=element(by.id("password-input"));
    var ConfirmPassword=element(by.id("confirm-password-input"));
    var NextConfirm=element(by.xpath("/html/body/app-root/app-create-account/div[2]/form/app-create-email/div/div/button"));
    var BackConfirm=element(by.buttonText("BACK"));

    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.waitForAngular(true);
        browser.driver.manage().window().maximize();
    
    });
    it('test create an account',function(){
       //Click the menu button
       
        menu.click();
        console.log("menu is clicked");
        CreateAccount.click();
        console.log("create an account is clicked");
        Email.click().clear().sendKeys("sridevi.sycom@olivetech.net");
        NextButton.click();
        FirstName.click().sendKeys("srree");
        LastName.click().sendKeys("dheve");
        PassWord.click().sendKeys("123456");
        ConfirmPassword.click().sendKeys("123456");
        NextConfirm.click();
        browser.sleep(60000);
    });
});