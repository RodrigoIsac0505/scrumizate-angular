'use strict';

angular.module('myApp.instruccion', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/instruccion', {
            templateUrl: 'instruccion/instruccion.html',
            controller: 'InstruccionController'
        });
    }])

    .controller('InstruccionController', ['$scope', '$http', '$window', '$rootScope', function ($scope, http, $window, $rootScope) {
       
        var vm = this;
        
        vm.regresar = function() {
            $window.location = '#!/menu'
        }

    }]);