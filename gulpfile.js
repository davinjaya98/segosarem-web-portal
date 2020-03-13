var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var vendorResourcePath = 'node_modules/';
var jsVendors = [
    `${vendorResourcePath}angular/angular.js`,
    `${vendorResourcePath}angular-sanitize/angular-sanitize.js`,
    `${vendorResourcePath}ng-pattern-restrict/src/ng-pattern-restrict.js`,
    `${vendorResourcePath}jquery/dist/jquery.js`,
    `${vendorResourcePath}moment/moment.js`,
    // `${vendorResourcePath}animejs/lib/anime.js`,
    `${vendorResourcePath}jquery-modal/jquery.modal.js`
];

var htmlContextPath = 'app/pages/';
var sassContextPath = 'app/scss/';
var jsContextPath = 'app/js/';
var assetsContextPath = 'app/assets/';

var htmlSources = ['index.html', `${htmlContextPath}**/*.html`]

var sassSources = [`${sassContextPath}*.scss`],
    jsSources = [`index.js`, `${jsContextPath}main.js`, `${jsContextPath}frontend/*.js`, `${jsContextPath}app/*.js`, `${jsContextPath}components/*.js`, `${jsContextPath}service/*.js`],
    feJsSources = [`${jsContextPath}frontend/frontend-lib.js`],
    assetsSources = [`${assetsContextPath}*/**`],
    outputDir = "dist/"

gulp.task('clean', function () {
    return del([`${outputDir}*`]);
});

gulp.task('html:clean', function () {
    return del(`${outputDir}/**/*.html`);
});

gulp.task('html', function () {
    return gulp.src(htmlSources)
        .pipe(gulp.dest(outputDir))
        .on('error', gutil.log)
        .pipe(connect.reload());;
});

gulp.task('sass:clean', function () {
    return del(`${outputDir}/assets/css/main.css`);
});

gulp.task('sass', function () {
    return gulp.src(sassSources)
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest(`${outputDir}assets/css/`))
        .on('error', gutil.log)
        .pipe(connect.reload());
});

gulp.task('vendor-js', function () {
    return gulp.src(jsVendors)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(`${outputDir}assets/js/`))
        .on('error', gutil.log)
        .pipe(connect.reload());
});

gulp.task('js:clean', function () {
    return del([`${outputDir}/assets/js/fe-lib.js`, `${outputDir}/assets/js/main.js`]);
});

gulp.task('main-js', function () {
    return gulp.src(jsSources)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(`${outputDir}assets/js/`))
        .on('error', gutil.log)
        .pipe(connect.reload());
});

gulp.task('fe-lib-js', function () {
    return gulp.src(feJsSources)
        .pipe(concat('fe-lib.js'))
        .pipe(gulp.dest(`${outputDir}assets/js/`))
        .on('error', gutil.log)
        .pipe(connect.reload());
});

gulp.task('assets:clean', function () {
    return del([`${outputDir}assets/*`, `!${outputDir}assets/js`, `!${outputDir}assets/css`]);
});

gulp.task('assets', function () {
    return gulp.src(assetsSources)
        .pipe(gulp.dest(`${outputDir}assets/`))
        .on('error', gutil.log)
        .pipe(connect.reload());
})

gulp.task('watch', function (done) {
    gulp.watch(['index.html', `${htmlContextPath}**/*.html`], gulp.series('html:clean', 'html'));
    gulp.watch(`${sassContextPath}**/*.scss`, gulp.series('sass:clean', 'sass'));
    gulp.watch(`${jsContextPath}**/*.js`, gulp.series('js:clean', 'main-js', 'fe-lib-js'));
    gulp.watch(`${assetsContextPath}`, gulp.series('assets:clean', 'assets'))
    done()
});

gulp.task('build', gulp.series('clean', 'html', 'sass', 'vendor-js', 'main-js', 'fe-lib-js', 'assets'));

gulp.task('webserver', gulp.series('build', gulp.parallel(startWebserver, 'watch')));

function startWebserver(done) {
    connect.server({
        root: 'dist/',
        livereload: true
    }, function () {
        this.server.on('close', done)
    })
}


gulp.task('default', gulp.series('build'));