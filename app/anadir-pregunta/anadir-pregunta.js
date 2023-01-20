'use strict';

angular.module('myApp.anadir-pregunta', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/anadir-pregunta', {
            templateUrl: 'anadir-pregunta/anadir-pregunta.html',
            controller: 'AnadirPreguntaController'
        });
    }])

    .controller('AnadirPreguntaController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.anadirPregunta = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'addpregunta',
                    ID: null,
                    Dificultad: vm.d_p,
                    Pregunta: vm.p,
                    R_Correcta: vm.r_c,
                    R_Incorrecta1: vm.r_i1,
                    R_Incorrecta2: vm.r_i2,
                    R_Incorrecta3: vm.r_i3
                }
            }).then(function (response) {
                alert("La pregunta fue creada con exito!");
                $window.location = '#!/preguntas'
            }, function (response) {
                console.log(response.data);
                swal("Confirmado","La pregunta ha sido añadida con éxito","success");
                $window.location = '#!/preguntas'
            });
        }

        vm.cancelar = function (){
            $window.location = '#!/preguntas'
        }
    }]);