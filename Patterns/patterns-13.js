var n = 5;
for (i = n; i > 0; i--) {
    for (j = 1; j <= n; j++) {
        if (j <= i - 1) {
            process.stdout.write(" ");
        }
        else {
            if (i > 1) {
                if (i == j || j == n) {
                    process.stdout.write(" *");
                }
                else {
                    process.stdout.write("  ");
                }
            }
            else {
                process.stdout.write(" *");
            }
        }
    }
    console.log();
}