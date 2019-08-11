const gulp = require("gulp");

gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
})

gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))

})

gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "**/*"])
	.pipe(gulp.dest("dist/images"))

})