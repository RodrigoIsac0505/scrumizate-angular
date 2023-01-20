'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.login',
  'myApp.menu',
  'myApp.instruccion',
  'myApp.ranking',
  'myApp.ayuda',
  'myApp.adicionar-usuario',
  'myApp.preguntas', 
  'myApp.nosotros',
  'myApp.registrar',
  'myApp.editar-pregunta',
  'myApp.anadir-pregunta',
  'myApp.eliminar-pregunta',
  'myApp.eliminar-usuario',
  'myApp.configuracion-jugar',
  'myApp.jugar',
  'myApp.puntaje-final',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
