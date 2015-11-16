angular.module('senai', ['ui.growl','ui.grid','ui.grid.resizeColumns'])
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope','AlertService'];

function IndexController($scope, AlertService) {

    var vm = $scope;

    vm.pessoas = [];
    vm.pessoa = {
        nome:'Pessoa nº '+parseInt(vm.pessoas.length+1), email: 'pessoa'+parseInt(vm.pessoas.length+1)+'@email.com'
    };
    vm.gridItemClick = gridItemClick;

    vm.gridStyle = {
        width: '100%',
        height: '400px'
    };

    var cellTemplate = '<div class="ui-grid-cell-contents" ' +
        'ng-click="grid.appScope.gridItemClick(row,col,$index)"> ' +
        '<p ng-bind="::row.entity[col.colDef.field]"></p>' +
        '</div>';

    vm.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { field: 'nome', width: 230, cellTemplate: cellTemplate },
            { field: 'email', minWidth: 100, cellTemplate: cellTemplate }
        ]
    };

    vm.salvar = salvar;
    vm.limpar = limpar;

    function gridItemClick(row,col,$index){
        console.log(row,col,$index);
    }

    function salvar(){
        vm.pessoas.push(vm.pessoa);
        AlertService.showOk('Sucesso','Pessoa salva com sucesso');
        limpar();
    }

    function limpar(){
        vm.pessoa = {
                nome:'Pessoa nº '+parseInt(vm.pessoas.length+1),
                email:'pessoa'+parseInt(vm.pessoas.length+1)+'@email.com'};
    }

}
