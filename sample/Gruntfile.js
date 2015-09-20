
/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        typopro: {
            options: {
                directory: "lib",
                specimen: false,
                mergecss: true,
                fonts: [
                    "DejaVu",
                    "OpenSans"
                ]
            }
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules" ]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadTasks("../tasks");

    grunt.registerTask("default", [ "typopro" ]);
};

