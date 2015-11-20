(function () {
    'use strict';

    angular
        .module('senai')
        .service('PessoaService', PessoaService);

    /* @ngInject */
    function PessoaService($http) {
        this.nome = 'Jullierme';

        this.olaMundo = olaMundo;

        function olaMundo(nome) {
            return $http({
                method: 'POST',
                url: 'rest/pessoaController/olaMundo',
                params:{
                    nome: nome
                }
            });
        }
    }

})();

