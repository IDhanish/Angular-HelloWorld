// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-edge-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    files: [
      'src/app/app.component.spec.ts'
    ],

    proxies: {
      '/assets/': '/base/src/assets/'
    },

    preprocessors: {
      'src/app/app.component.spec.ts': ['@angular-devkit/build-angular']
    },

    browsers: ['Edge'],

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
