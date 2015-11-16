angular.module('senai',['ui.grid','ui.growl'])
    .controller('IndexController',IndexController);


IndexController.$inject = ['$scope','AlertService'];

function IndexController($scope, AlertService){

    var vm = $scope;

    vm.carros = [];
    vm.carro  = {nome: 'Carro nº '+parseInt(vm.carros.length+1),cor:'#fff'};
    //vm.carro = {};

    vm.salvar = salvar;
    vm.limpar = limpar;
    vm.gridItemClick = gridItemClick;
    vm.gridItemExcluir = gridItemExcluir;
    vm.gridItemEditar = gridItemEditar;
    vm.getRowStyle = getRowStyle;
    vm.gridOptions = {
        data: 'carros',
        columnDefs: [
            { name: 'Nome Carro', field: 'nome', width: 230, cellTemplate: 'app/templates/cell-template.html' },
            { name: 'Nome Cor', field: 'cor', minWidth: 100, cellTemplate: 'app/templates/cell-template.html' },
            { name: '', field: 'editar', cellTemplate: 'app/templates/cell-template-btn-editar.html' },
            { name: '#', field: 'excluir', cellTemplate: 'app/templates/cell-template-btn-excluir.html' }
        ],
        rowTemplate: 'app/templates/row-template.html'
    };

    function salvar(){

        vm.carros.push(vm.carro);
       // AlertService.showOk('Sucesso','Carro salvo com sucesso');
        limpar();
    }

    function limpar(){
        vm.carro = {nome: 'Carro nº '+parseInt(vm.carros.length+1),cor:'#fff'};
        //vm.carro = {};
    }

    function gridItemClick(row,col,$index){
        console.log(row,col,$index);
    }

    function gridItemExcluir(row, col,$index, rowRenderIndex){
       vm.carros.splice(rowRenderIndex,1);
    }

    function gridItemEditar(row, col,$index, rowRenderIndex){
        vm.carro = vm.carros[rowRenderIndex];
    }

    function getRowStyle(entity){
        if(entity.cor){
            var stl = {background: entity.cor};
            return stl;
        }
    }
}