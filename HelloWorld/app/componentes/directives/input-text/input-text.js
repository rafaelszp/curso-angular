(function () {
    'use strict';

    angular
        .module('senai')
        .directive('snInputText', snInputText);


    /* @ngInject */
    function snInputText() {
        var directive = {
            link: link,
            templateUrl: 'app/componentes/directives/input-text/input-text.html',
            restrict: 'E',
            scope: {
                label: '@',
                registro: '=',
                ngBlur: '&',
                ngRequired: '&',
                colspan: '@'
            }
        };
        return directive;

        function link($scope, element, attrs) {

            $scope.id = $scope.$id;

            if(!$scope.colspan){
                $scope.colspan='4';
            }

            $scope.styleClass = 'col-xs-'+$scope.colspan;
        }
    }

})();

