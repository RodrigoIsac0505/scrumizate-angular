'use strict';

angular.module('myApp.adicionar-usuario', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/adicionar-usuario', {
            templateUrl: 'adicionar-usuario/adicionar-usuario.html',
            controller: 'AdicionarUsuarioController'
        });
    }])

    .controller('AdicionarUsuarioController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.typeUser = $rootScope.typeUser;
        vm.crearUsuario = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'addusuario',
                    ID_usuario: vm.cedula,
                    firstname: vm.nombre,
                    lastname: vm.apellido,
                    email: vm.correo,
                    type: vm.tipoUsuario
                }
            }).then(function (response) {
                swal("El usuario " + vm.nombre + " " + vm.apellido+" fue agregado satisfactoriamente", {
                    buttons: false,
                    timer: 2000,
                  })
                $window.location = '#!/menu'
            }, function (response) {
                console.log(response.data);
            });
        }

            vm.regresar = function(){
                 $window.location = '#!/menu';
            }
    }]);