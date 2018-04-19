// var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlReporter({
//   dest: 'protractor-reports',
//   filename: 'protractor-report.html'
// });

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