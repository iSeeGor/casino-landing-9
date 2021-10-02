module.exports = function() {
    $.gulp.task('watch', () => {
        // $.gulp.watch('src/scss/**/*.scss', $.gulp.series(['styles:dev', 'styles:mq']));
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series(['styles:build', 'styles:min']));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('js:build'));
        $.gulp.watch('src/svg/**/*.svg', $.gulp.series('spriteSVG'));
        $.gulp.watch(['*.html']).on('change', $.browserSync.reload);
    });
};
