var n = 4;
for (var i = 0; i < n; i++) {
    for (var j = 4; j > i; j--) {
        process.stdout.write("*");
    }
    console.log();
}