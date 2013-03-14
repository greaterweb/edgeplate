'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.task.loadTasks('src/grunt-tasks');

    var path = require('path'),
        fs = require('fs');

    grunt.initConfig({
        project: {
            src : path.resolve(__dirname + '/src'),
            pkg : '',
            port: 9000,
            app: '<%= project.src %>/app',
            dist: path.resolve(__dirname + '/dist'),
            tmp: path.resolve(__dirname + '/.tmp'),
            test: path.resolve(__dirname + '/test'),
            server: '<%= project.src %>/server',
            services: '<%= project.src %>/services'
        },
        watch: {
            compass: {
                files: ['<%= project.app %>/styles/**/*.{scss,sass}'],
                tasks: ['compass:server']
            }
        },
        compass: {
            options: {
                sassDir: '<%= project.app %>/styles',
                cssDir: '<%= project.tmp %>/styles',
                imagesDir: '<%= project.app %>/styles/images',
                javascriptsDir: '<%= project.app %>/scripts',
                fontsDir: '<%= project.app %>/styles/fonts',
                relativeAssets: true
            },
            dist: {
                options: {
                    cssDir: '<%= project.dist %>/styles',
                    environment: 'production'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            grunt: 'Gruntfile.js',
            all: [
                '<%= project.app %>/scripts/*.js'
            ]
        }
    });

    grunt.renameTask('regarde', 'watch');

};
