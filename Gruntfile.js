'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.task.loadTasks('src/lib/wk-grunt/tasks');

    var path = require('path'),
        fs = require('fs');

    grunt.initConfig({

    });

    grunt.renameTask('regarde', 'watch');

};
