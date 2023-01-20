'use strict';

angular.module('myApp.jugar', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/jugar', {
            templateUrl: 'jugar/jugar.html',
            controller: 'JugarController'
        });
    }])

    .controller('JugarController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.dificultad = $rootScope.dificultad;
        vm.idUsuario = $rootScope.idUsuario;
        vm.username = $rootScope.user;

        vm.opciones = [];

        if (vm.dificultad=='1') {
            vm.sonido="sonidos/sonido1.mp3";
            vm.d='Facil';
        }
        if (vm.dificultad=='2') {
            vm.sonido="sonidos/sonido2.mp3";
            vm.d='Normal';
        }
        if (vm.dificultad=='3') {
            vm.sonido="sonidos/sonido3.mp3";
            vm.d='Dificil';
        }

        vm.consultaPreguntas = function () {

            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'preguntas',
                    d: vm.dificultad
                }
            }).then(function (response) {
                console.log(response.data);
                if (undefined != response.data) {
                    vm.listaPreguntas = response.data;

                    for (let index = 0; index < vm.listaPreguntas.length; index++) {

                        var objeto = vm.listaPreguntas[index];

                        if (index == 0) {
                            vm.listaPreguntas[index].active = true;
                        }

                        vm.listaPreguntas[index].opciones = [
                            {
                                id: 1,
                                name: objeto.R_Incorrecta1
                            },
                            {
                                id: 2,
                                name: objeto.R_Incorrecta2
                            },
                            {
                                id: 3,
                                name: objeto.R_Incorrecta3
                            },
                            {
                                id: 4,
                                name: objeto.R_Correcta
                            }
                        ];

                        vm.listaPreguntas[index].opciones.sort(() => Math.random() - 0.5);
                        vm.listaPreguntas[index].respondido = false;

                    }

                }
            }, function (response) {
                console.log(response.data);
            });
        }
        vm.consultaPreguntas();

        vm.siguiente = function () {

            var banderaMensaje = true;
            for (let index = 0; index < vm.listaPreguntas.length; index++) {

                if (vm.listaPreguntas[index].active && vm.listaPreguntas[index].respondido) {
                    vm.listaPreguntas[index].active = false;
                    banderaMensaje = false;
                    if ((index + 1) < vm.listaPreguntas.length) {
                        vm.listaPreguntas[index + 1].active = true;
                        
                    } else {
                        
                        $rootScope.puntajeCorrecto = vm.puntajeCorrecto;
                        $rootScope.cantidadAcierto = vm.cantidadAcierto;
                        $rootScope.cantidadError = vm.cantidadError;

                        http({
                            method: 'GET',
                            url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                            params: { ep: 'puntaje', ID: vm.idUsuario, score: vm.puntajeCorrecto }
                        }).then(function (response) {
                            console.log(response);
                        }, function (response) {
                            console.log(response.data);
                        });


                        $window.location = '#!/puntaje-final';

                    }

                    break;
                }

            }

            if (banderaMensaje) {
                alert("Seleccione una opcion");
            }

        }

        vm.puntajeCorrecto = 0;
        vm.cantidadAcierto = 0;
        vm.cantidadError = 0;

        vm.validarOpcion = function (objetoOpcion, index) {

            vm.listaPreguntas[index].respondido = true;

            if (objetoOpcion.id == 4) {
                vm.puntajeCorrecto = vm.puntajeCorrecto + 5;
                vm.cantidadAcierto = vm.cantidadAcierto + 1;
                swal("Buen trabajo!", "La respuesta es correcta!", "success")
            } else {
                swal("Ups respuesta incorrecta!", "La respuesta correcta es: !"+ vm.listaPreguntas[index].R_Correcta +"¡", "error")
                vm.cantidadError = vm.cantidadError + 1;
            }
            console.log("Suma puntaje correcto" + vm.puntajeCorrecto);
            console.log("Suma puntaje cantidadAcierto " + vm.cantidadAcierto);
            console.log("Suma puntaje cantidadError " + vm.cantidadError);
        }

        vm.regresar = function(){
            swal("¿Esta seguro que volver al menu?", "Perdera todos los puntos recaudados en esta partida", "info", {
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
                    $window.location = '#!/menu';
                    break;
                }
              });  
        }

    }]);