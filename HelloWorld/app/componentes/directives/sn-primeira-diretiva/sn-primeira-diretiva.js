(function() {
    'use strict';

    angular
        .module('senai')
        .directive('snPrimeiraDiretiva', snPrimeiraDiretiva);

     /* @ngInject */
    function snPrimeiraDiretiva() {

        var directive = {
            template: '<b>Esta é minha primeira diretiva</b>',
            restrict: 'E',
            scope: {
            }
        };
        return directive;

    }
})();