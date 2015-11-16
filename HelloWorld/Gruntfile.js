module.exports = function(grunt){

    //Carregando todas as tasks Npm, para digitação manual de carregamento
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        //Configurando LiveReload grunt-contrib-watch
        watch:{
            options: {
                livereload: true
            },
            app: {
                //Configurando arquivos que serão "escutados" pelo LiveReload
                files: [
                    'app/**/*.js',
                    'app/**/*.css',
                    'app/**/*.html',
                    'app/**/*.png',
                    'app/**/*.jpg',
                    'app/**/*.gif',
                    'app/**/*.bmp',
                    'aula8.html'
                ]
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            app: 'app/**/*.js'
        }
    });
};