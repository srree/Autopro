// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
   /* capabilities: {
      browserName: 'chrome'
    },*/
    getPageTimeout: 5000000,
    onPrepare: function() {
     
      browser.driver.manage().window().maximize();
  },
    Capabilities: [{
      
       
      browserName: 'chrome'
      
      }],
      
    

      spec:['C:/Users/sridevi/Automation/ILB/sample.js'],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
   

    
   spec:['C:/Users/sridevi/Automation/ILB/AboutFromMenu.js'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
     
    defaultTimeoutInterval : 50000000
    }
  };