//required plugins
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		concat = require('gulp-concat'),
		plumber = require('gulp-plumber'),
		beep = require('beepbeep'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
        autoprefixer = require('gulp-autoprefixer'),
        scsslint = require('gulp-scss-lint'),
        csscomb = require('gulp-csscomb');
		browserSync = require('browser-sync').create();
        uncss = require('gulp-uncss');

//project settings
var settings = {
	server: '',
	root: '',
	siteFiles: '**/*.html',
	sassDir: 'scss/**/*.scss',
	cssDest:  'css/',
	imgDir: 'assets/*',
	imgDest: 'img/'
},

//plumber error handling
onError = function(err) {
	beep();
	console.log(err);
	this.emit('end');
};


// serve/init browsersync
gulp.task('serve', ['sass'], function() {

	browserSync.init({
	server: {
      baseDir: settings.root
    },
    ghostMode: false
	});

	gulp.watch(settings.sassDir, ['sass']).on('change',browserSync.reload);
	gulp.watch(settings.siteFiles).on('change',browserSync.reload);

});

//compile sass
gulp.task('sass', function() {

	gulp.src(settings.sassDir)
		.pipe(plumber(onError))
		//.pipe(sourcemaps.init())
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 10'],
            cascade: false
        }))
		.pipe(sourcemaps.write())
        /*.pipe(uncss({
            html: ['1.html']
        }))*/
        .pipe(csscomb())
		.pipe(gulp.dest(settings.cssDest))
		.pipe(browserSync.stream());

});

gulp.task('scss-lint', function() {
    return gulp.src('scss/*.scss')
        .pipe(scsslint());
});

//optimize images
gulp.task('imgopt', function () {

  gulp.src(settings.imgDir)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(settings.imgDest));

});


//default gulp task
gulp.task('default', ['sass', 'serve']);