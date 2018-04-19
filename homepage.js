describe('test the items on the Home page ', function()
{
var until=protractor.ExpectedCondition;
var Menu=element(by.buttonText("MENU"));
var logo=element(by.className("header-logo ng-trigger ng-trigger-colorAnimation"));
var url="https://ilb-sqa-portal.ci.olivetech.com/home";
var About=element(by.buttonText("ABOUT"));
var Explang=element(by.buttonText("EXPLORE LANGUAGES"));
var Give=element(by.buttonText("GIVE"));
var cart=element(by.className("cart"));
var pray=element(by.buttonText("//*[@id=header]/div/nav/ul/li[1]/button[4]"));
var explorelanguage=element(by.className("ib-btn"));

it('test to check  application launching', function()
{
browser.get(url);
browser.getCurrentUrl().then(function(ur)
{
     expect(ur).toEqual("https://ilb-sqa-portal.ci.olivetech.com/home");
console.log("Application Launch successfully");
});
});
//it('test to get the page title',function(){

// browser.driver.getTitle().then(function(pageTitle) {
// expect(pageTitle).toEqual('illumiNations');
//  console.log("fail");    
// })
it('test the ILB logo',function(){
logo.click();

console.log("Logo is clicked");
browser.waitForAngular();
})     
it('test the ILB logo',function(){
        logo.click();
        
        console.log("Logo is clicked");
        browser.waitForAngular();
        })     
        it('test the ILB logo',function(){
                About.click();
                
                console.log("Logo is clicked");
                browser.waitForAngular();
                })     
                it('test the ILB logo',function(){
                        Menu.click();
                        
                        console.log("Logo is clicked");
                        browser.waitForAngular();
                        })            
                        it('test the ILB logo',function(){
                                explorelanguage.click();
                                
                                console.log("Logo is clicked");
                                browser.waitForAngular();
                                })     
                                it('test the ILB logo',function(){
                                        Explang.click();
                                        
                                        console.log("Logo is clicked");
                                        browser.waitForAngular();
                                        })     

        });
                
      
