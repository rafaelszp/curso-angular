angular.module('senai', ['ui.router']);
angular.module('senai').controller('IndexController', IndexController);

angular.module('senai').config(StateConfig);
StateConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function StateConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'app/views/home.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'app/views/about.html'
        });
}

IndexController.$inject = ['$scope'];
function IndexController($scope) {

}