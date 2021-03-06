(function () {

    angular.module('senai', ['ui.router', 'ngMaterial','oc.lazyLoad'])
        .controller('IndexController', IndexController)
        .config(config);

    //IndexController.$inject = ['$scope','$ocLazyLoad','$state','$rootScope'];


    /* @ngInject */
    function IndexController($scope,$ocLazyLoad, $state, $rootScope) {

        var vm = $scope;

        vm.carregarPessoa = carregarPessoa;
        vm.$on('eventoCadastroPessoa',onEventoCadastroPessoa);

        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            console.log('Saindo de '+fromState.name + ' para ' + toState.name);
        });

        function onEventoCadastroPessoa(event, data){
            vm.idPessoaCarregar = data.id;
        }

        function carregarPessoa(id){
            $state.go('entidade.cadastro', {id: id});
        }

    }

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        var home = {
            templateUrl: 'app/views/home-router.html',
            url: '/home'
        };

        var produto = {
            templateUrl: 'app/views/produto/produto-cadastro.html',
            url: '/produto'
        };
        var pesquisaProduto = {
            templateUrl: 'app/views/produto/produto-pesquisa.html',
            url: '/pesquisa'
        };

        var pessoa = {
            abstract: true,
            template: '<div ui-view/>',
            url: '/entidade'
        };

        var cadastroPessoa = {
            templateUrl: 'app/views/entidade/entidade-cadastro.html',
            url: '/cadastro/:id',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/entidade/cadastro-entidade-controller.js');
                }
            }
        };

        var pesquisaPessoa = {
            templateUrl: 'app/views/entidade/entidade-pesquisa.html',
            url: '/pesquisa'
        };

        $stateProvider
            .state('home', home)
            .state('produto', produto)
            .state('produto.pesquisa', pesquisaProduto)
            .state('pessoa',entidade)
            .state('pessoa.cadastro',cadastroPessoa)
            .state('pessoa.pesquisa',pesquisaPessoa)
        ;

        $urlRouterProvider.otherwise('/home');

    }

})();
