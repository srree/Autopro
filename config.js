exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
       ignoreUncaughtExceptions: true,
       capabilities: {
           'browserName' : 'chrome'
       },
    //specs: ['Users/vishvaprasad/eclipse-workspace/ILBspec.js']
   //specs: ['ilbLogin.js'],
   //    
   //         plugins: [{
   //    package: 'protractor-testability-plugin'
   //    }],
//   
   // specs:['C:/Users/sridevi/Protractor/sample.js'],
    //specs:['C:/Users/sridevi/Protractor/menu.js'],
    specs:['C:/Users/sridevi/Protractor/homepage.js'],
    
    //    suites: {

    // },
       //specs: ['ilbLogin.js'],
    
   
    // params: {
    //   login: {
    //     email: 'oliveqa345@mailinator.com',
    //     password: '123456'
    //   },
    //     donations: {
    //         monthly: 'yes',
    //         receiveEmailPrayerUpdates: 'yes'
    //     }
    // },
   //    capabilities: {
   //    browserName: 'firefox'
   //  }
   //    multiCapabilities: [{
   //    browserName: 'firefox'
   //  }, {
   //    browserName: 'chrome'
   //  }]
   
   onPrepare: function(){
       browser.manage().window().maximize();
       browser.manage().timeouts().implicitlyWait(900000);
   },


       jasmineNodeOpts:{
           showColors: true,
           defaultTimeoutInterval:80000000,
           
       },
       
   }
