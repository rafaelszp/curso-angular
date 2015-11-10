var senaiApp = angular.module('senai', ['ui.router']);
senaiApp.controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope) {

        $scope.carros = [
            {cor:'BRANCO',nome:'GOL'},
            {cor:'AZUL',nome:'FUSCA'},
            {cor:'VERDE',nome:'VECTRA'},
            {cor:'AMARELO',nome:'CELTA'},
            {cor:'LARANJA',nome:'KA'},
            {cor:'PRETO',nome:'MEGANE'}
        ];

        $scope.adicionarCarro = adicionarCarro;
        function adicionarCarro(){
            var carro = {};
            carro.nome = 'Carro '+ $scope.carros.length;
            carro.cor = 'Cor '+ $scope.carros.length;
            $scope.carros.push(carro);
        }

        $scope.alterarPrimeiroCarro = alterarPrimeiroCarro;
        function alterarPrimeiroCarro(){
            $scope.carros[0].nome = $scope.carros[0].nome + ":D:D:D";
            $scope.carros[0].cor = $scope.carros[0].cor + ":D:D:D";
        }

        $scope.removerUltimoCarro = removerUltimoCarro;
        function removerUltimoCarro(){

            $scope.carros.pop();
        }

}