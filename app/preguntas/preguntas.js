'use strict';

angular.module('myApp.preguntas', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/preguntas', {
            templateUrl: 'preguntas/preguntas.html',
            controller: 'preguntasController'
        });
    }])

    .controller('preguntasController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.consultarPreguntas = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'allpreguntas'
                }
            }).then(function (response) {
                console.log(response.data);
                if (undefined != response.data) {
                    vm.listaPreguntas = response.data
                }
            }, function (response) {
                console.log(response.data);
            });
        }

        vm.editarPregunta = function (obj) {
            $rootScope.ID_Pregunta = obj.ID;
            $rootScope.dPregunta = obj.Dificultad;
            $rootScope.preg = obj.Pregunta;
            $rootScope.rCorrecta = obj.R_Correcta;
            $rootScope.rIncorrecta1 = obj.R_Incorrecta1;
            $rootScope.rIncorrecta2 = obj.R_Incorrecta2;
            $rootScope.rIncorrecta3 = obj.R_Incorrecta3;
            $window.location = '#!/editar-pregunta';
        }

        vm.anadirPregunta = function () {
            $window.location = '#!/anadir-pregunta';
        }

        vm.eliminarPregunta = function (ob) {
            $rootScope.id_eliminar = ob.ID;
            $rootScope.pregunta_eliminar = ob.Pregunta;
            $window.location = '#!/eliminar-pregunta';
        }

        vm.regresar = function(){
            $window.location = '#!/menu';
       }

        vm.consultarPreguntas();
    }]);