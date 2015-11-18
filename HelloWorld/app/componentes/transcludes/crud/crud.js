(function() {
    'use strict';


    angular
        .module('senai')
        .directive('snCrud', snCrud);

    /* @ngInject */
    function snCrud() {

        var directive = {

            link: link,
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/componentes/transcludes/crud/crud.html',
            scope: {
            	titulo: '@',
                salvar: '&',
                limpar: '&',
                exibirBotaoSalvar: '=',
                exibirBotaoLimpar: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            scope.onSalvar = onSalvar;
            scope.onLimpar = onLimpar;


            if(scope.exibirBotaoSalvar === undefined ){
                scope.exibirBotaoSalvar=true;
            }

            if(scope.exibirBotaoLimpar===undefined ){
                scope.exibirBotaoLimpar=true;
            }

            function onSalvar(){
                scope.salvar();
            }

            function onLimpar(){
                scope.limpar();
            }

        }
    }

})();