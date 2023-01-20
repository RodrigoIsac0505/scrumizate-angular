'use strict';

angular.module('myApp.nosotros', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/nosotros', {
            templateUrl: 'nosotros/nosotros.html',
            controller: 'nosotrosController'
        });
    }])

    .controller('nosotrosController', ['$scope', '$http', '$window', '$rootScope', function ($scope, http, $window, $rootScope) {
       
        var vm = this;

        vm.regresar = function() {
            $window.location = '#!/login'
        }

    }]);