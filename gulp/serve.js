module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            server: {
                baseDir: './' 
            },
        });

    });
}