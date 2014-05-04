/*
**  grunt-typopro -- Grunt Task for Installing TypoPRO Fonts
**  Copyright (c) 2014 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* global module:    false */
/* global require:   false */
/* global __dirname: false */

/*  external requirements  */
var path  = require("path");
var chalk = require("chalk");

/*  determine path to TypoPRO dependency  */
var typopro_basedir = path.resolve(path.join(__dirname, "..", "node_modules", "typopro"));

/*  export the Grunt plugin  */
module.exports = function (grunt) {
    /*  define the Grunt task  */
    grunt.registerTask("typopro", "Install TypoPRO Fonts", function () {
        /*  prepare task options  */
        var options = this.options({
            directory: ".",
            mergecss: false,
            blurb:    true,
            fonts:    []
        });
        grunt.verbose.writeflags(options, "Options");

        /*  sanity check the usage  */
        if (options.fonts.length === 0)
            grunt.fail.fatal("no fonts specified (you have to set the \"typopro.options.fonts\" configuration!)");

        /*  determine files to copy  */
        var patterns = [
            "TypoPRO-*-*.woff",
            "TypoPRO-*-*.eot",
            "TypoPRO-*-*.ttf",
            "TypoPRO-*-*.css"
        ];
        if (options.blurb)
            patterns.push("TypoPRO-*-*.txt");

        /*  ensure destination directory exists  */
        var dstdir = options.directory;
        if (!grunt.file.exists(dstdir))
            grunt.file.mkdir(dstdir);

        /*  iterate over all fonts to install  */
        options.fonts.forEach(function (font) {
            /*  ensure source directory exists  */
            var srcdir = path.join(typopro_basedir, "web", "TypoPRO-" + font);
            if (!grunt.file.isDir(srcdir)) {
                grunt.fail.fatal("no such font: " + font + " (expected directory \"" + srcdir + "\")");
                return;
            }

            /*  install all files belonging to source directory  */
            grunt.log.writeln("Installing TypoPRO font family: " + chalk.green(font));
            var files = grunt.file.expand({ cwd: srcdir }, patterns);
            files.forEach(function (file) {
                var src = path.join(srcdir, file);
                var dst = path.join(dstdir, file);
                grunt.file.copy(src, dst);
            });
        });

        /*  optionally merge all CSS files  */
        if (options.mergecss) {
            var css = "";
            var files = grunt.file.expand({ cwd: dstdir }, "TypoPRO-*-*.css").sort();
            files.forEach(function (file) {
                var dst = path.join(dstdir, file);
                css += grunt.file.read(dst, { encoding: "utf8" });
                grunt.file.delete(dst);
            });
            grunt.file.write(path.join(dstdir, "TypoPRO.css"), css, { encoding: "utf8" });
        }
    });
};

