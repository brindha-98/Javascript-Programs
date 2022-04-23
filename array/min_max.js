var a = [9, 8, 2, 5, 3]
for (var i = 0; i < a.length; i++) {
    for (var j = i; j < a.length; j++) {
        var temp;
        if (a[j] < a[i]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
console.log(a);
console.log("Minimum=" + a[0], "Maximum=" + a[a.length - 1]);
