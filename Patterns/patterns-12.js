var n = 4;
for (i = n; i > 0; i--) {
    for (j = 0; j < n; j++) {
        if (j < i - 1) {
            process.stdout.write(" ");
        }
        else {
            process.stdout.write(" *");
        }
    }
    console.log();
}
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (j > i) {
            process.stdout.write(" *");
        }
        else {
            process.stdout.write(" ");
        }
    }
    console.log();
}