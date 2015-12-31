var gulp = require("gulp");
var LiveServer = require("gulp-live-server");
var browserSync = require("browser-sync");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");


gulp.task('live-server', function () {
    var server = new LiveServer('server.js');
    server.start();
});

gulp.task('bundle', function() {
    return browserify({
        entries: 'app/src/components/App.jsx',
        debug: true,
    })
    .transform(babelify, {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./app/src'));
});

gulp.task('serve', ['bundle', 'live-server'], function () {
    browserSync.init(null, {
        proxy: 'https://localhost:8080',
        port: 9091
    });
});

