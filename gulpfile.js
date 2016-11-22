var gulp = require("gulp")
var sass = require('gulp-sass');


var htmls = "app/**/*.html"
var csses = "app/**/*.css"
gulp.task("html", function(){
  gulp.src(htmls)
    .pipe(gulp.dest("build/app"))
})
gulp.task("css", function(){
  gulp.src(csses)
    .pipe(gulp.dest("build/app"))

})
gulp.task("sass", function () {
  gulp.src("app/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build/app"))
})
gulp.task("watch", function(){
  gulp.watch(htmls, ["html"])
  gulp.watch(csses, ["css"])
  gulp.watch("app/**/*.sass", ["sass"])
})
gulp.task("default",["html", "css", "sass", "watch"], function(){

})


