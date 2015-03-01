module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/app/app.js',
      'src/app/**/**.js',
      'test/**.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

  });
};