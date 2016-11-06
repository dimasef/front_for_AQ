var gulp = require("gulp")
var watch = require("gulp-watch")
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
gulp.task("watch", function(){
  gulp.watch(htmls, ["html"])
  gulp.watch(csses, ["css"])
})
gulp.task("default",["html", "css", "watch"], function(){

})


