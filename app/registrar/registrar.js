'use strict';

angular.module('myApp.registrar', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/registrar', {
            templateUrl: 'registrar/registrar.html',
            controller: 'RegistrarController'
        });
    }])

    .controller('RegistrarController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.typeUser = $rootScope.typeUser;
        vm.crearUsuario = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'addjugador',
                    ID_usuario: vm.cedula,
                    username: vm.usuario,
                    psswd: vm.contrasena,
                }
            }).then(function (response) {
                swal("El usuario " + vm.usuario + " fue agregado satisfactoriamente", {
                    buttons: false,
                    timer: 2000,
                  })
                $window.location = '#!/login'
            }, function (response) {
                console.log(response.data);
            });
        }

            vm.regresar = function(){
                 $window.location = '#!/login';
            }
    }]);