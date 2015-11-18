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
            	titulo: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();