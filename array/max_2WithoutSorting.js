var a = [5, 1, 2, 6, 8];
var max1 = a[0];
var max2 = a[0];
for (var i = 0; i < a.length; i++) {
    if (a[i] > max1) {
        max1 = a[i];
    }
}
console.log(max1);
for (var i = 0; i < a.length; i++) {
    if (a[i] > max2 && a[i] < max1) {
        max2 = a[i];
    }
}
console.log(max2);