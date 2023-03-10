//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js',
      'login*/**/*.js',
      'menu*/**/*.js',
      'instruccion*/**/*.js',
      'ranking*/**/*.js',
      'adicionar-usuario*/**/*.js',
      'eliminar-usuario*/**/*.js',
      'configuracion-jugar*/**/*.js',
      'jugar*/**/*.js',
      'puntaje-final*/**/*.js',
      'pseudoapi/**/*.php'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
