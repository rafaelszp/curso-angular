(function () {
    'use strict';

    angular
        .module('senai')
        .controller('IndexController', IndexController);


    /* @ngInject */
    function IndexController($scope) {

        var vm = this;
        vm.title = 'IndexController';
        vm.entidade = {};
        $scope.onFocusOutNome = onFocusOutNome;

        activate();

        ////////////////

        function activate() {

        }

        function onFocusOutNome($event){
            console.log('focus out');
        }
    }

})();


