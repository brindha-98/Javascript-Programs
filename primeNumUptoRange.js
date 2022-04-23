var n = 25;
var count = 0;
for (var i = 2; i < n; i++) {
    for (var j = 2; j < n && i >= j; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log(i);
    }
    count = 0;
}
