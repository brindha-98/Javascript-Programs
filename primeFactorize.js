var i = 2;
var n = 72;
for (var i = 2; i < n; i++) {
    while (n % i == 0) {
        console.log(i);
        n = n / i;
    }
}
