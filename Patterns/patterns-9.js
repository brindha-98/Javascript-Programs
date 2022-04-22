var n = 4;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        process.stdout.write(JSON.stringify(j));
    }
    console.log();
}
