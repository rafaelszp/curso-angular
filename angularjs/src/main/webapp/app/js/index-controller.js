angular.module('senai')
    .controller('IndexController', IndexController);

/*@ngInject*/
function IndexController(PessoaService) {
    var vm = this;
    vm.testeController = testeController;
    vm.entidade = {};

    function testeController() {
        PessoaService.olaMundo(vm.entidade.nome).then(olaMundoResult, olaMundoFault);
    }

    function olaMundoResult(response) {
        alert(response.data);
    }

    function olaMundoFault(rejection) {
        alert(rejection.data);
    }
}