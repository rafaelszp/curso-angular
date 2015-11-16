(function (){
    angular.module('senai')
        .controller('CadastroPessoaController',CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope','$stateParams'];
    function CadastroPessoaController($scope, $stateParams){

        var vm = $scope;
        vm.pessoa = {};
        vm.pessoa.id=$stateParams.id;
        vm.disparar = disparar;

        function disparar(){
            var id = Math.floor((Math.random() * 100000) + 1);
            $scope.$emit('eventoCadastroPessoa',{id: id});
        }
    }
})();
