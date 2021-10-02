const concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rename = require("gulp-rename"),
      babel = require("gulp-babel");

const jsFiles = [

]

module.exports = function(){

    $.gulp.task('js:dev', () =>{

        return $.gulp.src('src/js/**/*.js')
            // .pipe(concat('index.js'))
            .pipe($.gulp.dest("assets/js"))
            .pipe($.browserSync.stream())

         // return Promise.all([
        //     $.gulp.src(jsFiles)
        //     .pipe(concat('scripts.js'))
        //     .pipe($.gulp.dest("public/assets/js"))
        //     .pipe($.browserSync.stream()),
        // ]);

    });

    $.gulp.task('js:build', () =>{

        return Promise.all([
            $.gulp.src("src/js/**/*.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe($.gulp.dest("assets/js")),
            
            // $.gulp.src("resources/src/js/vendor/**/*.js")
            // .pipe(concat('vendor.js'))
            // .pipe($.gulp.dest("public/assets/js/vendor"))
        ]);

    });

};