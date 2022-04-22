var n = 4;
var a = 0;
var b = "*";
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (a < 2) {
            process.stdout.write(b);
        }
    }
    a++;
    if (a == 2) {
        a = 0;
        if (b == "*") {
            b = ".";
        }
        else {
            b = "*";
        }
    }
    console.log();
}





