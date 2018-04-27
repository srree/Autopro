describe('test sample', function()
{
var until=protractor.ExpectedCondition;
    var url="https://ilb-sqa-portal.ci.olivetech.com/home"
    it('test get the url', function()
{
browser.get(url);
browser.driver.sleep(3000);
browser.getCurrentUrl().then(function(ur)
{
    expect(ur).toEqual("https://ilb-sqa-portal.ci.olivetech.com/home");
console.log("pass");
});

});
// it('test the current url contain', function(){
//     browser.getText().then(function(text)
//     {
//         expect(text).toContain(ilb);
// });
// });
});