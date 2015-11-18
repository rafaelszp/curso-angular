(function (){
    angular.module('senai')
        .controller('CadastroProdutoController',CadastroProdutoController);

    CadastroProdutoController.$inject = ['$scope','$stateParams','AlertService'];
    function CadastroProdutoController($scope, $stateParams, AlertService){

        var vm = this;
        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.exibirBotaoLimpar = false;

        function salvar(){
            AlertService.showOk('Produto salvo');
        }

        function limpar(){
            vm.entidade = {};
            AlertService.showInfo('Produto limpinho');
        }

    }
})();
