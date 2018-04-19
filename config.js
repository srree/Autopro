<<<<<<< HEAD
// var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlReporter({
//   dest: 'protractor-reports',
//   filename: 'protractor-report.html'
// });
=======
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
       ignoreUncaughtExceptions: true,
       capabilities: {
           'browserName' : 'chrome'
       },

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
>>>>>>> 6f1080efa0480525afcfe88425093a16ce533e94

// An example configuration file.
exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: 
  {
    'browserName': 'chrome',
    //'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
  },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',
//   onPrepare: function() {
//     jasmine.getEnv().addReporter(reporter);
//  },
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/Users/sridevi/Protractor/Loginn.js'],
  // Options to be passed to Jasmine.

<<<<<<< HEAD
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
  },
  allScriptsTimeout: 800000000,
};
=======
       jasmineNodeOpts:{
           showColors: true,
           defaultTimeoutInterval:80000000,
           
       },
       
   }
>>>>>>> 6f1080efa0480525afcfe88425093a16ce533e94
