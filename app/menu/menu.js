'use strict';

angular.module('myApp.menu', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/menu', {
            templateUrl: 'menu/menu.html',
            controller: 'MenuController'
        });
    }])

    .controller('MenuController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {
        
        var vm = this;
        
        vm.typeUser = $rootScope.typeUser;

        vm.instruccion = function(){
            $window.location = '#!/instruccion'
        }

        vm.redirigirRanking = function(){
            $window.location = '#!/ranking'
        }

        vm.ayuda = function(){
            $window.location = '#!/ayuda'
        }


        vm.addusuario = function(){
            $window.location = '#!/adicionar-usuario'
        }

        vm.deleteUsuario = function(){
            $window.location = '#!/eliminar-usuario'
        }

        vm.configuracionUsuario = function(){
            $window.location = '#!/configuracion-jugar'
        }

        vm.mantenimiento = function(){
          $window.location = '#!/preguntas'
      }

        vm.cerrarSesion = function(){
            swal("¿Esta seguro que desea salir?", "", "info", {
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
                    $window.location = '#!/login'
                    swal("Hasta pronto!", {
                        buttons: false,
                        timer: 1000,
                      });
                    
                    break;
                }
              });  
        }
    }]);