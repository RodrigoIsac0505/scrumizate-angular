'use strict';

angular.module('myApp.editar-pregunta', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/editar-pregunta', {
            templateUrl: 'editar-pregunta/editar-pregunta.html',
            controller: 'EditarPreguntaController'
        });
    }])

    .controller('EditarPreguntaController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.id_p = $rootScope.ID_Pregunta;
        vm.d_p = $rootScope.dPregunta;
        vm.p = $rootScope.preg;
        vm.r_c = $rootScope.rCorrecta;
        vm.r_i1 = $rootScope.rIncorrecta1;
        vm.r_i2 = $rootScope.rIncorrecta2;
        vm.r_i3 = $rootScope.rIncorrecta3;

        if (vm.d_p=='1') {
            vm.d='Fácil';
        }
        if (vm.d_p=='2') {
            vm.d='Normal';
        }
        if (vm.d_p=='3') {
            vm.d='Dificil';
        }

        vm.editarPregunta = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'addpregunta',
                    ID: vm.id_p,
                    Dificultad: vm.d_p,
                    Pregunta: vm.p,
                    R_Correcta: vm.r_c,
                    R_Incorrecta1: vm.r_i1,
                    R_Incorrecta2: vm.r_i2,
                    R_Incorrecta3: vm.r_i3
                }
            }).then(function (response) {
                swal("Confirmado","La pregunta fue actualizada con éxito","success");
                $window.location = '#!/preguntas'
            }, function (response) {
                console.log(response.data);
            });
        }

        vm.cancelar = function (){
            $window.location = '#!/preguntas'
        }
    }]);