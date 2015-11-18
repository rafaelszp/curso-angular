(function (){
    angular.module('senai')
        .controller('CadastroPessoaController',CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope','$stateParams','AlertService'];
    function CadastroPessoaController($scope, $stateParams, AlertService){

        var vm = this;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;

        function salvar(){
            AlertService.showOk('Pessoa salva');
        }

        function limpar(){
            vm.entidade = {};
            AlertService.showInfo('Pessoa limpinha');
        }

        //vm.entidade.id=$stateParams.id;
        //vm.disparar = disparar;

        //function disparar(){
        //    var id = Math.floor((Math.random() * 100000) + 1);
        //    $scope.$emit('eventoCadastroPessoa',{id: id});
        //}
    }
})();
