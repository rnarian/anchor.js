module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'anchor.js']
        },
        uglify: {
            build: {
                src: 'anchor.js',
                dest: 'anchor.min.js'
            }
        },
        htmlhint: {
            html1: {
                options: {
                    'tag-pair': true
                },
                src: ['*.html']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['Gruntfile.js', 'anchor.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['*.html'],
                tasks: ['htmlhint']
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('dev', ['watch']);

};
