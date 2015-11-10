angular.module('senai')
    .service('AlertService',AlertService);


AlertService.$inject = ['$growl'];

function AlertService($growl){

    this.showOk = showOk;
    this.showError = showError;
    this.showInfo = showInfo;
    this.showWarning = showWarning;

    function showOk(titulo,mensagem){
        $growl.box(titulo,mensagem,{
            class: 'success',
            timeout: 3000
        }).open();
    }
    function showError(titulo,mensagem){
        $growl.box(titulo,mensagem,{
            class: 'danger',
            timeout: 3000
        }).open();
    }
    function showInfo(titulo,mensagem){
        $growl.box(titulo,mensagem,{
            class: 'primary',
            timeout: 3000
        }).open();
    }
    function showWarning(titulo,mensagem){
        $growl.box(titulo,mensagem,{
            class: 'warning',
            timeout: 3000
        }).open();
    }
}