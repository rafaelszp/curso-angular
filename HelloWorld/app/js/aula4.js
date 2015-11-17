angular.module('senai', ['ngMessages','ui.growl']);
angular.module('senai')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope','AlertService','$filter'];
function IndexController($scope,AlertService,$filter) {

    $scope.pessoa = {};
    $scope.pessoas = [];

    var variavel_idiota = '';


    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar() {

        if ($scope.frmPessoas.$invalid === true) {
            AlertService.showError('Vish!','Ooops! Olha que tem campos inválidos no formulário :D');
            return;
        }

        $scope.pessoas.push($scope.pessoa);
        AlertService.showOk('Aeee!','Vivaaaa! Salvou!' + JSON.stringify($scope.pessoa));

        $scope.dataStr = $filter('date')($scope.pessoa.dataNascimento,'dd/MM/yyyy');

        limpar();
    }

    function limpar() {
        $scope.pessoa = {nome: '', email: '', dataNascimento: ''};
        $scope.frmPessoas.$setPristine();
        // $scope.pessoa = {};

    }


}
