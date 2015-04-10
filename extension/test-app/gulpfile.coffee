gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require('browser-sync')
gulp.task 'server', ->
	browserSync
		port: 9000
		server: baseDir: './'
		browser: 'google chrome'
gulp.task 'default', [
	'server'
]