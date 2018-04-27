// var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
// var reporter = new HtmlReporter({
//   dest: 'protractor-reports',
//   filename: 'protractor-report.html'
// })
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    
    capabilities: 
    {
      'browserName': 'chrome',
      chromeOptions: {
        args: ["--window-size=800,600" ]
      }
   }, 
    
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    getPageTimeout: 10000,
  //   onPrepare: function() {
  //     jasmine.getEnv().addReporter(reporter);
  //  },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
   // specs: ['C:/Users/sridevi/Protractor/Loginn.js'],
   suites:
   {
    hompage: ['C:/Users/sridevi/Protractor/Page_object/hompage.js'],
    search: ['C:/Users/sridevi/Protractor/Page_object/search.js'],
   },
   // specs: ['C:/Users/sridevi/Protractor/creataccount.js'],
    //specs: ['C:/Users/sridevi/Protractor/sample.js'],
    // Options to be passed to Jasmine.
    // onPrepare: function() {
    //   var jasmineReporters = require('jasmine-reporters');
    //   jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //       consolidateAll: true,
    //       savePath: 'testresults',
    //       filePrefix: 'xmloutput',
    //       cleanDestination: true
    //   }));
    onPrepare: function () {
      browser.driver.manage().window().setSize(1200, 800);
      var Jasmine2HtmlReporter = require('C:/Users/sridevi/node_modules/protractor-jasmine2-html-reporter');
      var reporter  = new Jasmine2HtmlReporter ({
          dest:  'C:/Users/sridevi/node_modules/protractor/test-results',
          filename: 'Login.html'
      });
      jasmine.getEnv().addReporter(reporter);
  },
      jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval:5000000,
        isVerbose : true,
        includeStackTrace : true,

      }
    };