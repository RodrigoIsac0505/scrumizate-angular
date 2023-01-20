'use strict';

angular.module('myApp.puntaje-final', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/puntaje-final', {
            templateUrl: 'puntaje-final/puntaje-final.html',
            controller: 'PuntajeFinalController'
        });
    }])

    .controller('PuntajeFinalController', ['$scope', '$http', '$window', '$rootScope', function ($scope, http, $window, $rootScope) {

        var vm = this;

        vm.puntajeCorrecto = $rootScope.puntajeCorrecto;
        vm.cantidadAcierto = $rootScope.cantidadAcierto;
        vm.cantidadError = $rootScope.cantidadError;
        vm.dificultad = $rootScope.dificultad;
        vm.username =   $rootScope.user;

        if (vm.dificultad=='1') {
            vm.d='Facil';
        }
        if (vm.dificultad=='2') {
            vm.d='Facil';
        }
        if (vm.dificultad=='3') {
            vm.d='Facil';
        }

        vm.Salir = function () {
            $window.location = '#!/menu';
        }


    }]);