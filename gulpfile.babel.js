import { series, parallel, watch, src, dest } from 'gulp'
import autoprefixer from 'autoprefixer'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import changed from 'gulp-changed'
import colors from 'colors'
import concat from 'gulp-concat'
import cssnano from 'cssnano'
import figlet from 'figlet'
import eslint from 'gulp-eslint'
import imagemin from 'gulp-imagemin'
import sassLint from 'gulp-sass-lint'
import lolcatjs from 'lolcatjs'
import minify from 'gulp-minify'
import packageJSON from './package.json'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
const paths = {
  src: {
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/**/*.*',
    html: './**/**/*.html'
  },
  dest: {
    css: './dist/css/',
    js: './dist/js/',
    img: './dist/img/',
  }
}
colors.setTheme({
  silly: ['rainbow', 'bold'],
  verbose: ['cyan', 'bold'],
  prompt: ['grey', 'bold'],
  info: ['green', 'bold'],
  warn: ['yellow', 'bold'],
  debug: ['blue', 'bold'],
  error: ['red', 'bold'],
})
lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true
function welcome(done) {
	let starting = figlet.textSync('starting tasks...', {
    font: 'speed',
    horizontalLayout: 'default',
    verticalLayout: 'default'
	})
	lolcatjs.fromString(`${starting}`);
  done()
}
function sassCompile(done) {
  return src(paths.src.sass)
    .pipe(sassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': true
      },
      // all linting rules: https://github.com/sasstools/sass-lint/tree/master/docs/rules
      rules: {
        'single-line-per-selector': 0,
        'no-css-comments': 0,
				'indentation': 0,
				'property-sort-order': 0,
				'no-qualifying-elements': 0,
				'force-attribute-nesting': 0,
				'force-pseudo-nesting': 0,
				'force-element-nesting': 0,
				'no-vendor-prefixes': 0,
				'final-newline': 0,
				'mixins-before-declarations': 0,
				'no-color-literals': 0,
				'nesting-depth': 0,
      },
    }))
    .pipe(sassLint.format())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1,
		}))
		.pipe(dest(paths.dest.css))
    .pipe(rename({extname: '.min.css'}))
    .pipe(postcss([autoprefixer({
            cascade: false
        }), cssnano()]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(paths.dest.css))
    .pipe(browserSync.stream())
    done()
}
function jsCompile(done) {
  return src(paths.src.js)
    .pipe(eslint({
        'parserOptions': {
            'ecmaVersion': 6,
        },
        'extends': 'eslint:recommended',
        'rules': {
            'semi': ['warn', 'always'],
            'no-console': 'off',
        },
    }))
    .pipe(eslint.formatEach('pretty'))
    .pipe(eslint.results(results => {
        console.log(`JavaScript Warnings: `.prompt + `${results.warningCount}`.warn)
        console.log(`JavaScript Errors: `.prompt + `${results.errorCount}`.error)
    }))
    .pipe(plumber())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .on('error', (err) => {
      console.warn(`[JS Babel Error] ${err.message}`.error)
    })
    .pipe(concat('bundle.js'))
		.pipe(sourcemaps.init())
    .pipe(minify({
      ext:{
           min:'.min.js'
       },
       mangle: true,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(paths.dest.js))
    .pipe(browserSync.stream())
    done()
}
function imgCompress(done) {
  return src(paths.src.img)
    .pipe(plumber())
    .pipe(changed(paths.dest.img))
    .pipe(imagemin())
    .pipe(dest(paths.dest.img))
    .pipe(browserSync.stream())
    done()
}
function reload() {
  browserSync.reload()
}
function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
  done()
}
function watchFiles(done) {
  watch([paths.src.sass], sassCompile)
  watch([paths.src.js], jsCompile)
  watch([paths.src.img], imgCompress)
  watch([paths.src.html]).on('change', reload)
  done()
}
function getStarted(done) {
  lolcatjs.fromString(`You are working on ${packageJSON.name}, version: ${packageJSON.version}, by ${packageJSON.author}`);
	let leggo = figlet.textSync('LETS GO!', {
    font: 'Dancing Font',
    horizontalLayout: 'full',
    verticalLayout: 'full'
	})
	lolcatjs.fromString(`${leggo}`);
  done()
}
const build = series(sassCompile, jsCompile, imgCompress)
const serveWatch = parallel(serve, watchFiles)
exports.default = series(
  welcome,
  build,
  serveWatch,
  getStarted,
)
