'use strict';

angular.module('myApp.eliminar-pregunta', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/eliminar-pregunta', {
            templateUrl: 'eliminar-pregunta/eliminar-pregunta.html',
            controller: 'EliminarPreguntaController'
        });
    }])

    .controller('EliminarPreguntaController', ['$scope', '$http', '$rootScope', '$window', function ($scope, http, $rootScope, $window) {

        var vm = this;

        vm.id_eliminar = $rootScope.id_eliminar;
        vm.pregunta_eliminar = $rootScope.pregunta_eliminar;

        vm.eliminarPregunta = function () {
            http({
                method: 'GET',
                url: 'http://localhost/scrumizate/app/pseudoapi/api.php',
                params: {
                    ep: 'deletepregunta',
                    ID: vm.id_eliminar                }
            }).then(function (response) {
                swal("Confirmado","La pregunta fue eliminada con éxito","success");
                $window.location = '#!/preguntas'
            }, function (response) {
                console.log(response.data);
            });
        }

        vm.cancelar = function (){
            $window.location = '#!/preguntas'
        }
    }]);