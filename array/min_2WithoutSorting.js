var a = [5, 1, 2, 6, 8];
var min1 = a[0];
var min2 = a[0];
for (var i = 0; i < a.length; i++) {
    if (a[i] < min1) {
        min1 = a[i];
    }
}
console.log(min1);
for (var i = 0; i < a.length; i++) {
    if (a[i] < min2 && a[i] > min1) {
        min2 = a[i];
    }
}
console.log(min2);