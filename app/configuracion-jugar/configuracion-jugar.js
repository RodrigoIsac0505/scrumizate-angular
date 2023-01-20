'use strict';

angular.module('myApp.configuracion-jugar', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/configuracion-jugar', {
            templateUrl: 'configuracion-jugar/configuracion-jugar.html',
            controller: 'ConfiguracionJugarController'
        });
    }])

    .controller('ConfiguracionJugarController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.seleccionarDificultad = function (dificultad) {
            $rootScope.dificultad = dificultad;
            $window.location = '#!/jugar'
        }

        vm.regresar = function(){
            $window.location = '#!/menu'
        }
    }]);