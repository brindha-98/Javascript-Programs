var n = 4;
var a = 0;
for (var i = n; i > 0; i--) {
    a = 0;
    for (var j = 0; j < n; j++) {
        if (j < i - 1) {
            process.stdout.write(" ");
        }
        else {
            a = a + 2;
            process.stdout.write(JSON.stringify(a));
        }
    }
    console.log();
}