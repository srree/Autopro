describe('test ilb menu items clickable or not ', function()
{
var until=protractor.ExpectedCondition;
var Menu=element(by.buttonText("MENU"));
var Give=element(by.linkText("GIVE"));
var Pray=element(by.linkText("PRAY"));
var About=element(by.linkText("About"));
var exploreLanguage=element(by.linkText("Explore Languages"));
var ContactUs=element(by.linkText("Contact Us"));
var Login=element(by.linkText("Login"));
var CreateAccount=element(by.linkText("Create an Account"));
var url="https://ilb-sqa-portal.ci.olivetech.com/home"
it('test to check  application launching', function()
{
browser.get(url);
browser.getCurrentUrl().then(function(ur)
{
    expect(ur).toEqual("https://ilb-sqa-portal.ci.olivetech.com/home");
console.log("Application Launch successfully");
});
});
// it('test to get the page title',function(){

// browser.driver.getTitle().then(function(pageTitle) {
// expect(pageTitle).toEqual('illumiNations');
//  console.log("fail");    
// });
it('test to click the menu items',function()
{
  
   Menu.click();
});
xit('test to click the menu items',function()
{
   
   Give.click();
   browser.waitForAngular();
});
it('test to click the menu items',function()
{
   
   Pray.click();
   browser.waitForAngular();
});
it('test to click the menu items',function()
{
   
   About.click();
   browser.waitForAngular();
});
xit('test to click the menu items',function()
{
   exploreLanguage.click();
});
xit('test to click the menu items',function()
{
   
   contactUs.click();
});
xit('test to click the menu items',function()
{

   Login.click();
});
xit('test to click the menu items',function()
{
  
   CreateAccount.click();
});
});
