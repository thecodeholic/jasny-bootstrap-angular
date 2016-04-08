module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        bower: 'bower_components',

        concat: {
            js: {
                src: [
                    'src/**/*.js',
                    'src/*.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            bower: {
                files: [
                    {src: 'dist/<%= pkg.name %>.js', dest: 'dist/<%= pkg.name %>.min.js'}
                ]
            }
        },

        watch: {
            js: {
                files: ['src/**/*.js', 'src/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};