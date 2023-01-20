'use strict';

angular.module('myApp.eliminar-usuario', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/eliminar-usuario', {
            templateUrl: 'eliminar-usuario/eliminar-usuario.html',
            controller: 'EliminarUsuarioController'
        });
    }])

    .controller('EliminarUsuarioController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.typeUser = $rootScope.typeUser;
        vm.eliminarUsuario = function (cedula) {
            swal("¿Esta seguro que desea eliminar este usuario?", "", "info", {
                buttons: {
                  cancelar: { text: "Cancelar"
                  },
                  aceptar: {
                    text: "Aceptar"
                  },
                },
              })
              .then((value) => {
                switch (value) {
                  case "cancelar":
                    break;
                  case "aceptar":
                    http({
                        method: 'GET',
                        url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                        params: {
                            ep: 'deleteusuario',
                            ID_usuario: cedula                }
                    }).then(function (response) {
                        swal("Usuario eliminato", {
                            buttons: false,
                            timer: 1000,
                          });
                        vm.consultarUsuarios();
                        //$window.location = '#!/menu'
                    }, function (response) {
                        console.log(response.data);
                    });
                    break;
                }
              });
        }

        vm.consultarUsuarios = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'allusuarios'
                }
            }).then(function (response) {
                console.log(response.data);
                if (undefined != response.data) {
                    vm.listaUsuario = response.data
                }
            }, function (response) {
                console.log(response.data);
            });
        }

        vm.consultarUsuarios();
    }]);