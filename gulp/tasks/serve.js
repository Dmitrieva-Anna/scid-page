const gulp = require('gulp')

const imageMini = require('./imageMini');
const styles = require('./styles');
const html2html = require('./html2html')
const script = require('./script');
const dependenciesJS = require('./dependenciesJS');
const dependenciesCSS = require('./dependenciesCSS');

const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/**/*.{gif,png,jpg,svg,webp}', gulp.series(imageMini, readyReload))
    gulp.watch('src/styles/**/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch('src/template/**/*.html', gulp.series(html2html, readyReload))
    gulp.watch('src/lib/js/*.js', gulp.series(dependenciesJS, readyReload))
    gulp.watch('src/lib/css/*.css', gulp.series(dependenciesCSS, readyReload))

    return cb()
}
