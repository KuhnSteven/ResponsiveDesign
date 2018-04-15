const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("css", () => {
    return gulp
        .src("./scss/styles.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", () => {
    gulp.watch("./scss/*.scss", ["css"]);
});