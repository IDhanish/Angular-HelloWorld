// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    files: [
      'src/app/app.component.spec.ts'
    ],

    proxies: {
      '/assets/': '/base/src/assets/'
    },

    preprocessors: {
      'src/app/component.spec.ts': ['@angular-devkit/build-angular']
    },

    browsers: ['Chrome'],

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222'
        ]
      }
    },

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
