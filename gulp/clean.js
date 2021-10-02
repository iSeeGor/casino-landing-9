const assets = ['assets/css/*', 'assets/js/*'];
// const images = ['assets/**/*', '!assets/vendor'];

module.exports = () => {
    $.gulp.task('clean', function () {
        return $.del(assets);
    })
}