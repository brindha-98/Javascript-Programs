var n = 4;
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (j >= i) {
            process.stdout.write(" *");
        }
        else {
            process.stdout.write(" ");
        }
    }
    console.log();
}