angular.module('senai', []);

angular.module('senai').controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope) {

    init();

    function init() {
        $scope.styleDiv = {}
        $scope.myClass = '';
        $scope.$watch('nome', nomeChange);
    }

    function nomeChange(newVal, oldVal) {

        if (oldVal === newVal) {
            return;
        }

        if (newVal === 'Rafael') {
            $scope.styleDiv.backgroundColor = 'red';
            $scope.myClass='cinza';
        } else if (newVal === 'Keyla') {
            $scope.styleDiv.backgroundColor = 'pink';
            $scope.myClass='azul';
        } else {
            $scope.myClass='';
            $scope.styleDiv.backgroundColor = 'white';
        }
    }

}