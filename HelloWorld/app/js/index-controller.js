angular.module('HelloApp',[]);

angular.module('HelloApp')
    .controller('IndexController',function($scope){

        $scope.nome = 'Hello ';

        $scope.click = function(){
            $scope.nome = 'Rafael';
        };

    });