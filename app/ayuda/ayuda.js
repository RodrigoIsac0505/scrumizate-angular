'use strict';

angular.module('myApp.ayuda', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/ayuda', {
            templateUrl: 'ayuda/ayuda.html',
            controller: 'AyudaController'
        });
    }])

    .controller('AyudaController', ['$scope', '$http', '$window', '$rootScope', function ($scope, http, $window, $rootScope) {
       
        var vm = this;

        vm.regresar = function() {
            $window.location = '#!/menu'
        }

    }]);