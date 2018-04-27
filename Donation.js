describe('donation' , function() {
    var url ='https://ilb-sqa-portal.ci.olivetech.com/home';
    var Give=element(by.buttonText('GIVE'));
    var homepageGive=element(by.xpath('/html/body/app-root/app-giving/section/form/app-giving-amount/section/div[2]/div/div[1]/span[3]/button/span'));
    var continueGuest=element(by.buttonText('CONTINUE AS A GUEST'));
      var Firstname=element(by.id('mat-input-3'));
    var Lirstname=element(by.id('mat-input-4'));
    var Email=element(by.id('mat-input-5'));
    var Address=element(by.id('mat-input-6'));
    var City=element(by.id('mat-input-7'));
    var State=element(by.id('mat-input-8'));
    var Zip=element(by.id('mat-input-9'));
    var Country=element(by.id('mat-input-10'));
    var Phone=element(by.id('mat-input-11'));
    var Next=element(by.xpath('/html/body/app-root/app-giving/section/form/div[3]/app-giving-billing/section/div/button[1]/span'));
    var Nameoncard=element(by.id('mat-input-12'));
    var Cardnumber=element(by.className("card-number-label"));
    var Month=element(by.className("exp-card"));
    var Cvc=element(by.className("stripeCvc"));
    var Wheremostneeded=element(by.className('mat-select-value'));
    var Bible=element(by.className("mat-option ng-star-inserted"));
    var Next=element(by.className("ib-btn"));
       var ConfirmGive=element(by.buttonText('GIVE'));
          beforeAll(function() {
                    browser.get(url);
             browser.driver.manage().window().maximize();
        });
          it('General Donation',function(){
            Give.click();
                        console.log('give button is clicked');
            homepageGive.click();
            continueGuest.click();
            Firstname.click().clear().sendKeys("srree");
            Lirstname.click().clear().sendKeys("dheve");
            Email.click().clear().sendKeys("xxxx@olivetech.net");
            Address.click().clear().sendKeys("Hyderabad");
            City.click().clear().sendKeys("dgfsdgf");
            State.click().clear().sendKeys("TG");
            Zip.click().clear().sendKeys("5000025");
            Country.click().clear().sendKeys("US");
            Phone.click().clear().sendKeys("574122223");
            Next.click();
            browser.wait("500000");
            Nameoncard.click().clear().sendKeys("shravani");
            Cardnumber.sendKeys("4111111111111111");
            browser.driver.sleep(5000);
  
           Month.sendKeys("1421");
           browser.driver.sleep(5000);
             browser.driver.actions().click(Cvc).sendKeys('147').perform();
           Wheremostneeded.click();
           Bible.click();
           Next.click();
           ConfirmGive.click();
          browser.driver.sleep(5000);
           
      });
    
    });