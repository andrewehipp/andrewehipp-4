const gulp =  require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync').create();


const project = require('./package.json').project;
const webpackConfig = require('./webpack.config.js');


// Static server
gulp.task('browser-sync', () => {
    browserSync.init({
        ghostMode: false,
        host: 'localhost',
        server: {
            baseDir: './',
        },
        port: 8000,
    });
});


// Bundler function
gulp.task('bundle', () => {
    return gulp
        .src(`${project.src.js}/main.js`)
        .pipe(
            webpackStream(webpackConfig, webpack)
                .on('error', (err) => {
                    console.log('WEBPACK ERROR', err);
                })
        )
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream({
            match: '**/*.css',
        }));
});


// Watch task boots up browser sync and bundles.
gulp.task('watch', ['browser-sync', 'bundle'], () => {
    // Watch `sass`
    gulp.watch(`${project.src.scss}/**/*.scss`, () => {
        gulp.start('bundle');
    });

    // Watch `js` and `jsx`
    gulp.watch([
        `${project.src.js}/**/*.js`,
        `${project.src.js}/**/*.jsx`,
    ], () => {
        gulp.start('bundle');
    });

    // Watch other files for changes and reload the page if they change.
    gulp.watch(['**/*.html'], () =>
        gulp.src('*.html')
            .pipe(browserSync.reload({
                stream: true,
            }))
    );

    // Stop old gulp watch when gulpfile is modified.
    // https://gist.github.com/pornel/ca9631f5348383b61bc7b359e96ced38
    gulp.watch('gulpfile.js', () => {
        process.exit(0);
    });
}
);


gulp.task('default', ['bundle']);
