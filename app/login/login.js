'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$http', '$window', '$rootScope', function ($scope, http, $window, $rootScope) {
        console.log("A su madre")

        var vm = this;

        vm.daClick = function () {
            
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: { ep: 'login', u: vm.username, p: vm.password }
            }).then(function (response) {
                console.log(response.data[0]);
                if (undefined != response.data[0].type) {
                    $rootScope.typeUser = response.data[0].type;
                    $scope.typeUser = response.data[0].type;
                    $rootScope.idUsuario =  response.data[0].ID;
                    $rootScope.user =  response.data[0].username;
                    $window.location = '#!/menu';
                }else{
                    swal("Error, usuario o contraseña incorrecta", "Reviselos y vuelva a intentarlo", "error")
                }
            }, function (response) {
                swal("Error, usuario o contraseña incorrecta", "Reviselos y vuelva a intentarlo", "error");
            });
        }

        vm.nosotros = function(){
            $window.location = '#!/nosotros';
        }

        vm.registrar = function(){
            $window.location = '#!/registrar';
        }

    }]);