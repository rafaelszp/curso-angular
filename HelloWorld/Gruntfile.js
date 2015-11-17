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
                ],
                tasks: ['jshint']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            app: 'app/**/*.js'
        },
        copy: {
            app: {
                files: [{
                    expand: true,
                    src: [
                        'app/**',
                        '!app/js/aula4.js',
                        '!app/js/aula4.js',
                        '!app/js/aula6.js',
                        '!bapp/js/aula7.js',
                        '!app/js/home.js',
                        '!app/js/index-bootstrap.js',
                        '!app/js/index-controller.js',
                        '!app/js/table-repeat.js'

                    ],
                    dest: 'build/'
                }]
            }
        },
        concat: {
            options: {
                nonull: true
            },
            appJs: {
                src: [
                    //'build/app/js/app-config.js' concatenando o app.config.js, além disto ele vai ignorar os arquivos já concatenados nas linhas subsequentes
                    'build/app/js/aula8.js',
                    'build/app/**/*.js',
                    //'!build/app/**/*controller.js' //ignorando controllers
                ],
                dest: 'build/app.js'
            },
            appCss: {
                src: ['build/app/**/*.css'],
                dest: 'build/estilo.css'
            }
        },
        clean: {
            app:{
                src: ['build']
            },
            cleanup:{
                src:[
                    'build/app/**/*.js',
                    '!build/app/**/*-controller.js',
                    '!build/app/app.js',
                    'build/app/**/*.css',
                    '!build/app/estilo.css'
                ]
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }

                ]
            }
        },
        uglify: {
            app: {
                files: [{
                    expand: true,
                    src: ['build/**/*.js']
                }]
            }
        },
        cssmin: {
            css: {
                files: [{
                    expand: true,
                    src: ['build/**/*.css']
                }]
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true
            },
            html: {
                files: [{
                    expand: true,
                    src: ['build/**/*.html']
                }]
            }
        }

    });

    grunt.registerTask('my-watch','Descricao',function(){
        grunt.task.run([
            'watch:app'
        ]);
    });

    grunt.registerTask('build',[
        'clean:app',
        'copy',
        'ngAnnotate:app',
        'concat',
        'clean:cleanup',
        'uglify',
        'cssmin:css',
        'htmlmin:html'
    ]);
};