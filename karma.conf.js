// Karma configuration
// Generated on Tue Jun 04 2013 15:58:03 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,

    {
        pattern: 'test/spec/javascripts/fixtures/**/*.*',
        watched: true,
        included: false,
        served: true
    },

    'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js',
    'test/lib/jasmine-jquery.js',

    'tdcss.js',
    'test/spec/spec.js'

];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
