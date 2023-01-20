'use strict';

angular.module('myApp.ranking', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/ranking', {
            templateUrl: 'ranking/ranking.html',
            controller: 'RankingController'
        });
    }])

    .controller('RankingController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {
        
        var vm = this;
        
        vm.typeUser = $rootScope.typeUser;

        vm.cargarRanking = function(){
            
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: { ep: 'rankings'}
            }).then(function (response) {
                console.log(response.data);
                if (undefined != response.data) {
                    vm.listaRanking = response.data;
                }
            }, function (response) {
                console.log(response.data);
            });
        }

        vm.cargarRanking();

        vm.regresar= function(){
            $window.location = '#!/menu'
        }

    }]);