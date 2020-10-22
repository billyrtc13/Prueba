const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel');

gulp.task('sass', () =>
    gulp
    .src('./src/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'))
)

gulp.task('js', () =>
    gulp
    .src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(babel({
        "presets": ["@babel/preset-env"]
     }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
);

gulp.task('img', () =>
    gulp
    .src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
);

gulp.task('html', () =>
    gulp
    .src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
)

gulp.task('watch', () => {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./src/img/*', gulp.series('img'));
    gulp.watch('./src/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('sass', 'js', 'img', 'html', 'watch'))
